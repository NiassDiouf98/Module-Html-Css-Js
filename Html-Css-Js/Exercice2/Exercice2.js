const card = document.getElementById('card');
    const desc = document.querySelector('.desc');
    const descChange = document.getElementById('desc-change');

    descChange.addEventListener('click', () => {
        desc.innerHTML = 'Déscription: Il a beaucoup de cheveux'
    })
    card.addEventListener('click', () => {
        alert("Vous avez cliquez sur la carte de l'utilisateur");
    })