// Переключение темы
const toggle = document.getElementById('themeToggle');
const body = document.body;

// Загрузка сохранённой темы
const savedTheme = localStorage.getItem('theme') || 'dark';
body.className = savedTheme;
toggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

toggle.addEventListener('click', function() {
    const isDark = body.classList.contains('dark');
    const newTheme = isDark ? 'light' : 'dark';
    body.className = newTheme;
    localStorage.setItem('theme', newTheme);
    toggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
});
