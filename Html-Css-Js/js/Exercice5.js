const themeToggle = document.getElementById('theme-toggle');

// Vérifier si un thème est déjà sauvegardé
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Sauvegarder la préférence
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});
