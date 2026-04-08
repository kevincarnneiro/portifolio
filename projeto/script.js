
document.addEventListener('DOMContentLoaded', function() {
  
  // 1. MENU MOBILE (Abrir e Fechar)
  const botaoMenu = document.getElementById('navbar-toggle');
  const menuMobile = document.getElementById('navbar-mobile');

  if (botaoMenu && menuMobile) {
    botaoMenu.onclick = function() {
      menuMobile.classList.toggle('active');
    };
  }

  // 2. MENU LATERAL (Trocar item ativo)
  const linksProjetos = document.querySelectorAll('.title_projeto');

  linksProjetos.forEach(function(link) {
    link.onclick = function() {
      // Primeiro: Remove a classe 'active' de todo mundo
      linksProjetos.forEach(item => item.classList.remove('active'));
      
      // Segundo: Coloca a classe 'active' apenas no link que foi clicado
      this.classList.add('active');
    };
  });

});

// --- Ano atual no footer ---
const yearEl = document.getElementById('current-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

