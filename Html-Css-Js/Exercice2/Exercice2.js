// Recuperation de la carte par son ID
const card = document.getElementById('card');
    // Selection de la description
    const desc = document.querySelector('.desc');
    // Selection du bouton pour changer la description
    const descChange = document.getElementById('desc-change');

    // Fonction pour ajouter une description
    descChange.addEventListener('click', () => {
        desc.innerHTML = 'Déscription: Il a beaucoup de cheveux'
    })
    // Fonction pour afficher un message suite au clique de la carte
    card.addEventListener('click', () => {
        alert("Vous avez cliquez sur la carte de l'utilisateur");
    })