// Fonction pour l'affichage dynamique
function addItem() {
    const input = document.getElementById('itemInput');
    // Recuperation de la valeur et supprESSION des espaces inutiles
    const itemText = input.value.trim();
    // Si la recuperation n'est pas vide
    if (itemText !== '') {
        // Creation d'un element li
        const li = document.createElement('li');
        li.textContent = itemText;
        // Ajout du li creer
        document.getElementById('itemList').appendChild(li);
        // Reinitialiser le champ de saisit
        input.value = '';
    }
}