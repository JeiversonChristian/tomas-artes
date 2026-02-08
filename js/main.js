/* =======================================================
   MAIN.JS - Lógica Geral e Menu Mobile
   ======================================================= */

// Seleciona os elementos
const btnMobile = document.querySelector('.btn-mobile');
const nav = document.getElementById('nav');
const links = document.querySelectorAll('.nav-link'); // Links do menu

// Função para abrir/fechar menu
function toggleMenu() {
    // Adiciona ou remove a classe 'active' no nav
    nav.classList.toggle('active');
    
    // Opcional: Muda o ícone de "Lista" para "X" (Cerrar)
    const icon = btnMobile.querySelector('i');
    if (nav.classList.contains('active')) {
        icon.classList.remove('ph-list');
        icon.classList.add('ph-x');
    } else {
        icon.classList.remove('ph-x');
        icon.classList.add('ph-list');
    }
}

// Evento de clique no botão
btnMobile.addEventListener('click', toggleMenu);

// Fecha o menu ao clicar em qualquer link (Melhor UX)
links.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        const icon = btnMobile.querySelector('i');
        icon.classList.remove('ph-x');
        icon.classList.add('ph-list');
    });
});