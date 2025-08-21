// Funções JS do modelo de portfólio pessoal
function showSection(sectionName) {
  // Esconde todas as seções
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.classList.remove('active');
  });

  // Remove classe ativa dos botões
  const navButtons = document.querySelectorAll('.nav-btn');
  navButtons.forEach(btn => {
    btn.classList.remove('active');
  });

  // Mostra a seção selecionada
  document.getElementById(sectionName).classList.add('active');

  // Adiciona classe ativa ao botão clicado
  event.target.classList.add('active');
}

// Efeito de digitação na home
window.addEventListener('load', function() {
  const homeBtn = document.querySelector('.nav-btn');
  homeBtn.addEventListener('click', function() {
    const typingElement = document.querySelector('.typing-effect');
    if (typingElement) {
      typingElement.style.animation = 'none';
      setTimeout(() => {
        typingElement.style.animation = 'typing 3s steps(40, end), blink-caret 0.75s step-end infinite';
      }, 10);
    }
  });
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    showSection('home');
    document.querySelector('.nav-btn').classList.add('active');
  }
});

document.querySelectorAll('.typing-effect').forEach((el) => {
  const text = el.textContent;
  const len  = text.length;
  const secsPerChar = 0.06;

  // cria keyframes únicos para cada elemento
  const animName = 'typing_' + Math.random().toString(36).slice(2);
  const styleTag = document.createElement('style');
  styleTag.textContent = `
    @keyframes ${animName} {
      from { width: 0ch; }
      to   { width: ${len}ch; }
    }
  `;
  document.head.appendChild(styleTag);


  el.style.width = '0ch';
  el.style.animation = `${animName} ${Math.max(len * secsPerChar, 0.01)}s steps(${len}, end) forwards,
                        blink-caret 0.75s step-end infinite`;
});
