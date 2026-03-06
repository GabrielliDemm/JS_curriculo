// ========== CONTROLHE DO MENU ============
const menuIcon = document.querySelector('#menu-icon');
const navList = document.querySelector('.navList');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navList.classList.toggle('open');

    // Bloquear scroll quando menu aberto
    document.body.style.overflow = navList.classList.contains('open') ? 'hidden' : 'auto';
});

// Fechar menu ao clicar em link
document.querySelectorAll('.navlist a').forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navList.classList.remove('open');
        document.body.style.overflow = 'auto';
    });
});

// fechar menu ao rolar
window.addEventListener('scroll', () => {
    if (navList.classList.contains('open')) {
        menuIcon.classList.remove('bx-x');
        navList.classList.remove('open');
        document.body.style.overflow = 'auto';
    }
});

// ======== NAVEGAÇÃO ATIVA =========
// Seleciona todos os links de navegação
const navLinks = document.querySelectorAll('.navlist a');

// Funçao para adicionar a classe "active" ao link clicado
function activeLink() {
    navLinks.forEach(it)
}