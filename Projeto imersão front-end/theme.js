const themeToggle = document.querySelector('.theme-toggle');
const themeStorageKey = 'preferredTheme';

const getSavedTheme = () => localStorage.getItem(themeStorageKey);
const getSystemTheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const getInitialTheme = () => getSavedTheme() || getSystemTheme();

const applyTheme = (theme) => {
    document.body.classList.toggle('light-theme', theme === 'light');
    themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro');
};

const saveTheme = (theme) => localStorage.setItem(themeStorageKey, theme);

const toggleTheme = () => {
    const nextTheme = document.body.classList.contains('light-theme') ? 'dark' : 'light';
    applyTheme(nextTheme);
    saveTheme(nextTheme);
};

if (themeToggle) {
    applyTheme(getInitialTheme());
    themeToggle.addEventListener('click', toggleTheme);
}
