const button = document.getElementById('changeButton');
    const title = document.getElementById('title');

    button.addEventListener('click', () => {
        title.textContent = 'Le texte a changé !';
        title.style.color = 'red'; // Change la couleur du texte en rouge
    })
    // Ajoute des interactions supplémentaires et les events sur le div
    const div = document.querySelector('.mon-bouton');
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'lightgray'; // Change la couleur de fond du div au survol
        div.style.transition = 'background-color 0.3s ease'; // ajoute une transition pour rendre le changement de couleur plus fluide
    });
    div.addEventListener('mouseout', () => {
        div.style.backgroundColor = ''; // Réinitialise la couleur de fond du div lorsque la souris quitte
        div.style.transition = 'background-color 0.3s ease'; // ajoute une transition pour rendre le changement de couleur plus fluide
    });

const darkMode = document.querySelector('.darkMode')
    darkMode.addEventListener('click', () => {
        document.body.style.backgroundColor = 'black';
        title.style.color = 'white';
    })
