/* ============================================================== *
** ==== Gestion du chargement et de l'update du localStorage ==== *
** ============================================================== */
/* =================== *
* ==== Chargement ==== *
* ==================== */
// ReRender au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    reRenderUser();
    reRenderTask();
    reRenderUserArchive();
});
// recupere l'objet user et le converti en string avec option
const usersInStorage = localStorage.getItem('users');
// recupere l'objet task et le converti en string avec option
const tasksInStorage = localStorage.getItem('tasks');
// Creation d'un utilisateur
let listUser = [];
if (usersInStorage) {
    // Verifier s'il y'a des donnees dans le localStorage on le parse
    listUser = JSON.parse(usersInStorage);
}
// Creation d'une tache
let listTask = [];
if (tasksInStorage) {
    listTask = JSON.parse(tasksInStorage);
}

/* ======================================== *
** ==== Modification de chaque tableau ==== *
** ======================================== */
function updateUserStorage() {
    localStorage.setItem('users', JSON.stringify(listUser))
}

function updateTaskStorage() {
    localStorage.setItem('tasks', JSON.stringify(listTask))
}

/* ======================================================== *
** ==== Gestion d'ouverture et de fermeture des modals ==== *
** ======================================================== */
// Gestion du modal d'ajout d'utilisateur
const userModalBtn = document.getElementById('addUserBtn');
const addUserModal = document.getElementById('addUserModal');
const closeUserModal = document.getElementById('closeUserModal');
let currentEditedUserId = null;
    userModalBtn.addEventListener('click', () => {
        currentEditedUserId = null;
        document.getElementById('fullname').value = '';
        addUserModal.classList.remove('hidden');
    })
    closeUserModal.addEventListener('click', () => {
        currentEditedUserId = null;
        addUserModal.classList.add('hidden');
    })
    // Gestion de la fermeture automatique
    addUserModal.addEventListener('click', (event) => {
        if (event.target === addUserModal) {
            currentEditedUserId = null;
            addUserModal.classList.add('hidden');
        }
    });

// Gestion du modal d'ajout de taches
const taskModalBtn = document.getElementById('addTaskBtn');
const addTaskModal = document.getElementById('addTaskModal');
const closeTaskModal = document.getElementById('closeTaskModal');
    taskModalBtn.addEventListener('click', () => {
        addTaskModal.classList.remove('hidden');
        loadUserOptions();
    })
    closeTaskModal.addEventListener('click', () => {
        addTaskModal.classList.add('hidden');
    })
    // Gestion de la fermeture automatique
    addTaskModal.addEventListener('click', (event) => {
        if (event.target === addTaskModal) {
            addTaskModal.classList.add('hidden');
        }
    });

// Gestion du modal de confirmation
const confirmModal = document.getElementById('confirmModal');
const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
const cancelDeleteBtn = document.getElementById('cancelDeleteBtn');
    cancelDeleteBtn.addEventListener('click', () => {
        confirmModal.classList.add('hidden');
    })
    // Gestion de la fermeture automatique
    confirmModal.addEventListener('click', (event) => {
        if (event.target === confirmModal) {
            confirmModal.classList.add('hidden');
        }
    });

// Gestion du bouton d'archivage
const userArchiveTableBody = document.querySelector('#user-archive-table');
const archiveUserBtn = document.getElementById('archive-user-btn');
const curentArchive = localStorage.getItem('archive-hidden');
    archiveUserBtn.addEventListener('click', (e) => {
        userArchiveTableBody.classList.toggle('hidden');

        if (userArchiveTableBody.classList.contains('hidden')) {
            localStorage.setItem('archive-hidden', '');
        }
    });

/* ================================================================================= *
** ==== Recuperation des inputs dans le modal user et creation d'un utilisateur ==== *
** ================================================================================= */
const addUserForm = document.getElementById('addUserForm');
    addUserForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const fullnameInput = document.getElementById('fullname');
        const fullname = fullnameInput.value.trim();
        if (fullname === '') return;

        if (currentEditedUserId) {
            const user = listUser.find(user => user.id === currentEditedUserId);
            if (user) {
                user.nom = fullname;
            }
        } else {
            const user = {
                id : generateRandomId(),
                nom : fullname,
                archive : false
            }
            listUser.push(user);
        }

        addUserForm.reset(); // Reinitialisation du formulaire
        addUserModal.classList.add('hidden'); // Fermeture du modal
        currentEditedUserId = null;
        updateUserStorage(); // Met a jour le localstorage
        reRenderUser();
        reRenderUserArchive();
    })

/* ====================================== *
** ==== Génèration d'un ID aleatoire ==== *
** ====================================== */
function generateRandomId(length = 8) {
  const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}

/* ============================================================================ *
** ==== recuperation des inputs dans le modal task et creation d'une tache ==== *
** ============================================================================ */
const addTaskForm = document.getElementById('addTaskForm');
    addTaskForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const taskTitle = document.getElementById('taskTitle').value;
        const selectedUser = document.getElementById('selectedUser').value;
        let task = {
            id : generateRandomId(),
            titre : taskTitle,
            termine : false,
            dateCreation: Date.now(),
            userId : selectedUser? selectedUser : null
        }
        addTaskForm.reset();
        addTaskModal.classList.add('hidden');
        listTask.push(task); // Ajout dans le tableau des taches
        updateTaskStorage() // Met a jour le localstorage
        reRenderTask();
    })

/* ========================================= *
** ==== Gestion du Re-Render de la page ==== *
** ========================================= */
const userTableBody = document.querySelector('#user-table tbody');
function reRenderUser(tableBody = userTableBody){
    tableBody.innerHTML = '';
    listUser.filter(user => (user.archive == false)).forEach(user => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${user.nom}</td>
            <td>
                <button title="Supprimer" class="btn delete-user-btn" data-user-id="${user.id}">x</button>
                <button title="Modifier" class="btn edit-user-btn" data-user-id="${user.id}">M</button>
            </td>
        `;
        tableBody.appendChild(tr);
    });
}

const taskTableBody = document.querySelector('#task-table tbody');
function reRenderTask(tableBody = taskTableBody){
    tableBody.innerHTML = '';
    const sortedTasks = [...listTask].sort((a, b) => b.dateCreation - a.dateCreation);
    sortedTasks.forEach(task => {
        const tr = document.createElement('tr');
        tr.setAttribute('data-task-id', task.id);
        tr.innerHTML = `
            <td>${task.titre}</td>
            <td class="task-status" style="color: ${task.termine ? 'green' : 'red'};">${task.termine ? 'Oui' : 'Non'}</td>
            <td>${task.userId ? listUser.find(user => user.id === task.userId)?.nom || 'Utilisateur supprimé' : 'Non assignée'}</td>
            <td>
                <button title="Supprimer" class="btn delete-task-btn" data-task-id="${task.id}">X</button>
                <button title="Modifier" class="btn edit-task-btn" data-task-id="${task.id}">M</button>
                <button title="Assigner" class="btn assign-task-btn" data-task-id="${task.id}">A</button>
            </td>
        `;
        tableBody.appendChild(tr);
    });
}

function reRenderUserArchive(tableArchiveBody = userArchiveTableBody){
    tableArchiveBody.innerHTML = '';
    listUser.filter(user => (user.archive == true)).forEach(user => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${user.nom}</td>
            <td>
            <button title="Restaurer" class="btn restore-user-btn" data-user-id="${user.id}">M</button>
            </td>
        `;
            // <button title="Supprimer" class="btn delete-user-btn" data-user-id="${user.id}">x</button>
        tableArchiveBody.appendChild(tr);
    });
}

/* ================================================================================== *
** ==== Chargement du select des utilisateurs dans le modal de création de tache ==== *
** ================================================================================== */
const userSelect = document.getElementById('selectedUser');
function loadUserOptions() {
    userSelect.innerHTML = '<option value="">Sélectionner un utilisateur</option>';
    listUser.filter(user => !user.archive).forEach(user => {
        const option = document.createElement('option');
        option.value = user.id;
        option.textContent = user.nom;
        userSelect.appendChild(option);
    });
}

/* ============================== *
** ==== Gestion du CRUD user ==== *
** ============================== */
userTableBody.addEventListener('click', (e) => {
    const deleteBtn = e.target.closest('.delete-user-btn');
    if (deleteBtn) {
        const userId = deleteBtn.getAttribute('data-user-id');
        confirmModal.classList.remove('hidden');
        confirmDeleteBtn.addEventListener('click', () => {
            deleteUser(userId);
            confirmModal.classList.add('hidden');
        });
        return;
    }

    const editBtn = e.target.closest('.edit-user-btn');
    if (editBtn) {
        const userId = editBtn.getAttribute('data-user-id');
        editUser(userId);
    }
});

userArchiveTableBody.addEventListener('click', (e) => {
    const archiveBtn = e.target.closest('.restore-user-btn');
    if (archiveBtn) {
        const userId = archiveBtn.getAttribute('data-user-id');
        restoreUser(userId);
    }
});

function deleteUser(userId) {
    const userIndex = listUser.findIndex(user => user.id === userId); // fonction pour trouver l'index
    if (userIndex !== -1) {
        listUser[userIndex].archive = true; // Marquer l'utilisateur comme archivé
        updateUserStorage();
        reRenderUser();
        reRenderUserArchive();
        // Desassignation des taches de l'utilisateur supprime
        listTask.forEach(task => {
            if (task.userId === userId) {
                task.userId = null;
            }
        });
        updateTaskStorage();
        reRenderTask();

    }
}

function editUser(userId) {
    const user = listUser.find(user => user.id === userId);
    if (user) {
        currentEditedUserId = userId;
        document.getElementById('fullname').value = user.nom;
        addUserModal.classList.remove('hidden');
    }
}

function restoreUser(userId){
    const userIndex = listUser.findIndex(user => user.id === userId);
    if (userIndex !== -1) {
        listUser[userIndex].archive = false;
        updateUserStorage();
        reRenderUser();
        reRenderUserArchive();
    }
}

/* ============================== *
** ==== Gestion du CRUD task ==== *
** ============================== */