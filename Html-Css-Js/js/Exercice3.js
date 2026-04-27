// Validation du formulaire
const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêcher l'envoi réel du formulaire

    // Valider qu'au moins une case à cocher (loisir) est sélectionnée
    const loisirChecked = document.querySelectorAll('input[name="loisir"]:checked');
    const errorMessage = document.getElementById('error-message');
    if (loisirChecked.length === 0) {
        errorMessage.style.display = 'block';
        return;
    } else {
        errorMessage.style.display = 'none';
    }

    // Récupérer les données du formulaire et les afficher
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
        if (data[key]) {
            if (Array.isArray(data[key])) {
                data[key].push(value);
            } else {
                data[key] = [data[key], value];
            }
        } else {
            data[key] = value;
        }
    });

    // Afficher les données
    console.log('Données du formulaire:', data);
    const dataOutput = document.getElementById('data-output');
    dataOutput.textContent = JSON.stringify(data, null, 2);
    document.getElementById('form-data').style.display = 'block';

    // Si tous les champs sont validés
    const successMessage = document.getElementById('success-message');
    successMessage.style.display = 'block';
});