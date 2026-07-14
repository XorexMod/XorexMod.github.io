// ===== ПЕРЕВОДЫ ДЛЯ ОБЩИХ ЭЛЕМЕНТОВ =====
const translations = {
    ru: {
        title: "DeadSeek — асимметричный хоррор",
        logo: "DEADSEEK",
        nav: {
            home: "Главная",
            dossier: "Досье",
            news: "Новости",
            support: "Поддержать"
        },
        index: {
            subtitle: "Асимметричный хоррор на Roblox",
            desc: "Тьма пробуждается. Сражайся за выживание или становись охотником. Каждый матч — это новая история.",
            cards: {
                dossier: "Все персонажи, способности и баланс",
                telegram: "Новости, тизеры, общение",
                boosty: "Эксклюзивный контент и поддержка",
                youtube: "Трейлеры, геймплей, тизеры",
                tiktok: "Короткие хоррор-моменты"
            },
            news: "Последние новости",
            tg_notice: "Не видно? Открой Telegram-канал",
            footer: "DeadSeek · концепт · 2026\nВсе права на тьму защищены",
            tg_button: "Перейти в Telegram-канал"
        },
        dossier: {
            title: "Досье персонажей",
            search: "Поиск по имени...",
            all: "Все",
            killers: "Киллеры",
            survivors: "Выжившие",
            all_types: "Все типы",
            table: {
                name: "Персонаж",
                role: "Роль",
                hp: "HP",
                speed: "Скорость",
                dmg: "Баз. урон",
                cd: "Кулдаун"
            },
            no_abilities: "Нет способностей",
            missing_desc: "Описание отсутствует.",
            footer: "DeadSeek — концепт · Данные обновлены 14.07.2026"
        }
    },
    en: {
        title: "DeadSeek — asymmetrical horror",
        logo: "DEADSEEK",
        nav: {
            home: "Home",
            dossier: "Dossier",
            news: "News",
            support: "Support"
        },
        index: {
            subtitle: "Asymmetrical horror on Roblox",
            desc: "The darkness awakens. Fight to survive or become the hunter. Every match is a new story.",
            cards: {
                dossier: "All characters, abilities and balance",
                telegram: "News, teasers, community",
                boosty: "Exclusive content and support",
                youtube: "Trailers, gameplay, teasers",
                tiktok: "Short horror moments"
            },
            news: "Latest news",
            tg_notice: "Can't see it? Open Telegram channel",
            footer: "DeadSeek · concept · 2026\nAll rights to darkness reserved",
            tg_button: "Open Telegram channel"
        },
        dossier: {
            title: "Character Dossier",
            search: "Search by name...",
            all: "All",
            killers: "Killers",
            survivors: "Survivors",
            all_types: "All types",
            table: {
                name: "Character",
                role: "Role",
                hp: "HP",
                speed: "Speed",
                dmg: "Base damage",
                cd: "Cooldown"
            },
            no_abilities: "No abilities",
            missing_desc: "Description missing.",
            footer: "DeadSeek — concept · Data updated 14.07.2026"
        }
    }
};

// ===== ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКА =====
let currentLang = localStorage.getItem('lang') || 'ru';

function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    const t = translations[lang];
    document.documentElement.lang = lang;
    
    // Заголовок
    document.title = t.title;
    
    // Логотип
    
    // Навигация
    document.querySelectorAll('.nav a[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if (key && t.nav[key]) el.textContent = t.nav[key];
    });
    
    // Кнопка переключения
    const toggle = document.getElementById('langToggle');
    if (toggle) toggle.textContent = lang === 'ru' ? '🇬🇧 EN' : '🇷🇺 RU';
    
    // Главная страница
    if (document.querySelector('.index-subtitle')) {
        document.querySelector('.index-subtitle').textContent = t.index.subtitle;
        document.querySelector('.index-desc').textContent = t.index.desc;
        document.querySelector('.index-news-title').textContent = t.index.news;
        document.querySelector('.index-tg-notice').textContent = t.index.tg_notice;
        document.querySelector('.index-footer').textContent = t.index.footer;
        const tgBtn = document.querySelector('.index-tg-button');
        if (tgBtn) tgBtn.textContent = t.index.tg_button;
        const cards = document.querySelectorAll('.card-home p');
        if (cards.length >= 5) {
            cards[0].textContent = t.index.cards.dossier;
            cards[1].textContent = t.index.cards.telegram;
            cards[2].textContent = t.index.cards.boosty;
            cards[3].textContent = t.index.cards.youtube;
            cards[4].textContent = t.index.cards.tiktok;
        }
    }
    
    // Страница досье
    if (document.getElementById('cardGrid')) {
        const tDossier = t.dossier;
        const title = document.querySelector('h2[style*="Досье персонажей"]');
        if (title) title.textContent = tDossier.title;
        const searchInput = document.getElementById('searchInput');
        if (searchInput) searchInput.placeholder = tDossier.search;
        const roleTabs = document.querySelectorAll('.role-tabs button');
        if (roleTabs.length >= 3) {
            roleTabs[0].textContent = tDossier.all;
            roleTabs[1].textContent = tDossier.killers;
            roleTabs[2].textContent = tDossier.survivors;
        }
        const allTypesBtn = document.querySelector('#abilityFilter button:first-child');
        if (allTypesBtn) allTypesBtn.textContent = tDossier.all_types;
        const ths = document.querySelectorAll('#summaryTable th');
        if (ths.length >= 6) {
            const keys = ['name', 'role', 'hp', 'speed', 'dmg', 'cd'];
            ths.forEach((th, i) => {
                if (i < keys.length) th.textContent = tDossier.table[keys[i]];
            });
        }
        const footer = document.querySelector('.footer');
        if (footer) footer.textContent = tDossier.footer;
        
        // Перерисовываем карточки и таблицу с персонажами (если функция существует)
        if (typeof window.renderCards === 'function') {
            window.renderCards();
        }
    }
}

// ===== ДОБАВЛЯЕМ КНОПКУ ПЕРЕКЛЮЧЕНИЯ ЯЗЫКА =====
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.nav');
    if (nav) {
        const btn = document.createElement('button');
        btn.id = 'langToggle';
        btn.className = 'theme-toggle';
        btn.textContent = currentLang === 'ru' ? '🇬🇧 EN' : '🇷🇺 RU';
        btn.addEventListener('click', function() {
            const newLang = currentLang === 'ru' ? 'en' : 'ru';
            applyLang(newLang);
        });
        nav.appendChild(btn);
    }
    // Применяем язык
    applyLang(currentLang);
});
