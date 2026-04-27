// Validation du formulaire 
const form = document.querySelector('form');

// Fonction pour valider et retourner les donnees
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêcher l'envoi réel du formulaire

    // Valider qu'au moins une case à cocher (loisir) est sélectionnée
    const loisirChecked = document.querySelectorAll('input[name="loisir"]:checked');
    const errorMessage = document.getElementById('error-message');
    if (loisirChecked.length === 0) {
        // Afficher le message si aucune case est cochee
        errorMessage.style.display = 'block';
        return;
    } else {
        errorMessage.style.display = 'none';
    }

    // Récupérer les données du formulaire et les afficher
    // Creer un objet a partir de l'interface Formdata 
    const formData = new FormData(form);
    // Initialisation d'un objet data
    const data = {};
    // Boucle pour stocker les valeurs recuperer dans l'objet data
    formData.forEach((value, key) => {
        // Verifier si la cle existe dans l'objet formdata
        if (data[key]) {
            // Verifier si la cle existe dans l'objet data
            if (Array.isArray(data[key])) {
                // Ajout de la valeur dans la cle
                data[key].push(value);
            } else {
                // Ajout d'un tableau dans la cle
                data[key] = [data[key], value];
            }
        } else {
            // Ajoute de la cle et de la valeur
            data[key] = value;
        }
    });

    // Afficher les données preformater dans la pages
    console.log('Données du formulaire:', data); // Affichage sur la console
    const dataOutput = document.getElementById('data-output');
    // Convertir l'objet data en string et stocke dans dans le navigateur
    dataOutput.textContent = JSON.stringify(data, null, 2);
    // Affichage du message de success
    document.getElementById('form-data').style.display = 'block';

    // Si tous les champs sont validés
    const successMessage = document.getElementById('success-message');
    successMessage.style.display = 'block';
});