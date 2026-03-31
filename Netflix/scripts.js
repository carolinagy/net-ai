const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;

const setTheme = (theme) => {
    root.setAttribute('data-theme', theme);
    themeToggle.textContent = theme === 'light' ? '☀️' : '🌙';
    themeToggle.setAttribute('aria-label', theme === 'light' ? 'Modo claro ativo, clique para alternar para escuro' : 'Modo escuro ativo, clique para alternar para claro');
    localStorage.setItem('netflix-theme', theme);
};

const savedTheme = localStorage.getItem('netflix-theme');
if (savedTheme === 'light' || savedTheme === 'dark') {
    setTheme(savedTheme);
} else {
    setTheme('dark');
}

themeToggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    setTheme(current === 'light' ? 'dark' : 'light');
});

// Salva o perfil selecionado para aparecer no catálogo
const profileLinks = document.querySelectorAll('.profile-link');
profileLinks.forEach(link => {
    link.addEventListener('click', () => {
        const profileName = link.querySelector('figcaption')?.textContent?.trim();
        const profileImage = link.querySelector('img')?.src;

        if (profileName) {
            localStorage.setItem('perfilAtivoNome', profileName);
        }

        if (profileImage) {
            localStorage.setItem('perfilAtivoImagem', profileImage);
        }
    });
});