const themeToggle = document.getElementById('theme-toggle');

// Vérifier si un thème est déjà sauvegardé
const currentTheme = localStorage.getItem('theme');
// Verifier si le theme en cours est le mode sombre
if (currentTheme === 'dark') {
    // Ajout du theme sombre
    document.body.classList.add('dark-mode');
}

// Fomction pour changer le theme
themeToggle.addEventListener('click', () => {
    // ajoute ou supprime le theme sombre suite au clique
    document.body.classList.toggle('dark-mode');
    
    // Sauvegarder la préférence
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});