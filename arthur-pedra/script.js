
function showSection(event, sectionName) {

  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
 

  const target = document.getElementById(sectionName);
  if (target) target.classList.add('active');
  
  if (event && event.currentTarget) event.currentTarget.classList.add('active');
}


function hookTypingRestartOnHome() {
  const homeBtn = Array.from(document.querySelectorAll('.nav-btn'))
    .find(b => b.getAttribute('onclick')?.includes("'home'"));
  if (!homeBtn) return;
  homeBtn.addEventListener('click', () => {
    const typing = document.querySelector('.typing-effect');
    if (typing) {
      typing.style.animation = 'none';
      setTimeout(() => {
        typing.style.animation = 'typing 3s steps(40, end), blink-caret 0.75s step-end infinite';
      }, 10);
    }
  });
}

// ESC volta para home
function hookEscapeToHome() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      showSection(null, 'home');
      const homeBtn = Array.from(document.querySelectorAll('.nav-btn'))
        .find(b => b.getAttribute('onclick')?.includes("'home'"));
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      if (homeBtn) homeBtn.classList.add('active');
    }
  });
}


const translations = {
  en: {
    "site.title": "Arthur Henrique Santana | Software Engineering Intern",
    "terminal.title": "Arthur@linux:~$ Software Engineering Intern",

    
    "nav.home": "~/home",
    "nav.about": "./about",
    "nav.experience": "./experience",
    "nav.education": "./education",
    "nav.skills": "./skills",
    "nav.projects": "./projects",
    "nav.contact": "./contact",

    // home
    "home.typing": "Arthur Henrique Santana - Software Engineering Intern",
    "home.welcome": "$ Welcome to my Linux Terminal",
    "home.role": "⚡ Software Engineering Intern | Kubernetes, Linux, QA",
    "home.location": "📍 Belo Horizonte, Minas Gerais, Brazil",
    "home.educationShort": "🎓 Software Engineering - PUC Minas",
    "home.devops": "🚀 DevOps & Kubernetes enthusiast",
    "home.navHint": "Use the tabs above to explore my tech journey.",

    // about
    "about.p1": "Software Engineering intern focused on testing applications in a cloud + edge computing ecosystem. Solid experience with testing, automation tools, and monitoring.",
    "about.p2": "Specialist in container orchestration (Docker, Kubernetes) and CI/CD with tools like Jenkins, Ansible, among others.",

    // experience - encora
    "exp.role1.title": "Internship",
    "exp.role1.company": "Encora",
    "exp.role1.period": "May 2025 - Present",
    "exp.role1.b1": "• Developing DevOps skills",
    "exp.role1.b2": "• Strong performance on PV, KPI, System Engineering tests, etc.",
    "exp.role1.b3": "• Learning DevOps and cloud computing practices",
    "exp.role1.b4": "• Part of an international project using English as the working language",

    // experience - aure
    "exp.role2.title": "SDR (Sales Development Representative)",
    "exp.role2.company": "Aure Digital • Belo Horizonte, MG",
    "exp.role2.period": "Jun 2024 - May 2025 · 8 months",
    "exp.role2.b1": "• Qualification of potential business opportunities",
    "exp.role2.b2": "• Meeting scheduling for Closers",
    "exp.role2.b3": "• Helped create pipelines for sales processes",
    "exp.role2.b4": "• Reactivation of the customer base",

    // education
    "edu.degree": "Bachelor of Software Engineering",
    "edu.desc": "Ongoing degree focused on software development, systems architecture, and emerging technologies.",

    // skills
    "skills.header": "$ ./skills --list-all",
    "skills.iac": "Infrastructure as Code",
    "skills.automation": "Automation",
    "skills.testsAuto": "Automated Tests",
    "skills.testsManual": "Manual Tests",

    // projects
    "proj.sga.period": "Second semester of 2024",
    "proj.sga.desc": "Group project at university simulating a system for managing driving schools. <br><br><strong>Technologies:</strong> Java, JavaScript, HTML, CSS<br><a href=\"https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-2-ti2-3740100-sga-auto-escola\" class=\"contact-link\" target=\"_blank\">📂 GitHub</a> <strong>Link:</strong> <a href=\"#\" class=\"contact-link\" target=\"_blank\">🔗 View Project</a>",

    // contact
    "contact.location": "<strong>📍 Location:</strong> Minas Gerais, Brazil",
    "contact.phone": "<strong>📱 Phone:</strong> Available via LinkedIn",
    "contact.echo": "echo \"Thank you for visiting!\"",
    "contact.thanks": "Thank you for visiting! Get in touch to discuss collaboration opportunities."
  },

  pt: {
    "site.title": "Arthur Henrique Santana | Estagiário em Engenharia de Software",
    "terminal.title": "Arthur@linux:~$ Estagiário em Engenharia de Software",

    // navegação
    "nav.home": "~/home",
    "nav.about": "./about",
    "nav.experience": "./experience",
    "nav.education": "./education",
    "nav.skills": "./skills",
    "nav.projects": "./projects",
    "nav.contact": "./contact",

    // home
    "home.typing": "Arthur Henrique Santana - Estagiário em Engenharia de Software",
    "home.welcome": "$ Bem-vindo ao meu Terminal Linux",
    "home.role": "⚡ Estagiário em Engenharia de Software | Kubernetes, Linux , QA",
    "home.location": "📍 Belo Horizonte, Minas Gerais, Brasil",
    "home.educationShort": "🎓 Engenharia de Software - PUC Minas",
    "home.devops": "🚀 Especialista em DevOps, Kubernetes",
    "home.navHint": "Navegue pelas abas acima para explorar minha trajetória em tecnologia.",

    // about
    "about.p1": "Estagiário em Engenharia de Software com foco em testes de aplicações num ecossistema de nuvem com computação de borda. Experiência sólida em testes, ferramentas de automação e monitoramento.",
    "about.p2": "Especialista em orquestração de containers (Docker, Kubernetes), CI/CD com ferramentas como Jenkins, Ansible, entre outros.",

    // experience - encora
    "exp.role1.title": "Estágio",
    "exp.role1.company": "Encora",
    "exp.role1.period": "Mai 2025 - Até o momento",
    "exp.role1.b1": "• Desenvolvimento de habilidades em Devops",
    "exp.role1.b2": "• Forte atuação em testes de PV, KPI, System Engineering, etc...",
    "exp.role1.b3": "• Aprendizado de práticas DevOps e cloud computing",
    "exp.role1.b4": "• Participação num projeto internacional, tendo como língua utilizada o Inglês",

    // experience - aure
    "exp.role2.title": "SDR (Sales Development Representative)",
    "exp.role2.company": "Aure Digital • Belo Horizonte, MG",
    "exp.role2.period": "Jun 2024 - Mai 2025 · 8 meses",
    "exp.role2.b1": "• Qualificação de possíveis oportunidades comerciais",
    "exp.role2.b2": "• Agendamento de reuniões para os Closers",
    "exp.role2.b3": "• Participei na criação de pipelines para os processos de venda",
    "exp.role2.b4": "• Trabalho de reativação da base de clientes",

    // education
    "edu.degree": "Bacharelado em Engenharia de Software",
    "edu.desc": "Graduação em andamento com foco em desenvolvimento de software, arquitetura de sistemas e tecnologias emergentes.",

    // skills
    "skills.header": "$ ./skills --list-all",
    "skills.iac": "Infrastructure as Code",
    "skills.automation": "Automation",
    "skills.testsAuto": "Automated Tests",
    "skills.testsManual": "Manual Tests",

    // projects
    "proj.sga.period": "Segundo Semestre de 2024",
    "proj.sga.desc": "Projeto em grupo realizado na universidade, simulando um sistema para gerenciamento de Auto Escolas. <br><br><strong>Tecnologias:</strong> Java, JavaScript, HTML, CSS<br><a href=\"https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-2-ti2-3740100-sga-auto-escola\" class=\"contact-link\" target=\"_blank\">📂 GitHub</a> <strong>Link:</strong> <a href=\"#\" class=\"contact-link\" target=\"_blank\">🔗 Ver Projeto</a>",

    // contact
    "contact.location": "<strong>📍 Localização:</strong> Minas Gerais, Brasil",
    "contact.phone": "<strong>📱 Telefone:</strong> Disponível via LinkedIn",
    "contact.echo": "echo \"Obrigado pela visita!\"",
    "contact.thanks": "Obrigado pela visita! Entre em contato para discutir oportunidades de colaboração."
  }
};


function detectInitialLang() {
  const saved = localStorage.getItem('language');
  if (saved) return saved;
  const nav = (navigator.language || 'pt').toLowerCase();
  return nav.startsWith('pt') ? 'pt' : 'en';
}

function applyLanguage(lang) {
  const dict = translations[lang] || translations.pt;

 
  document.documentElement.lang = (lang === 'pt') ? 'pt-BR' : 'en';


  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = dict[key];
    if (value == null) return;

  
    if (/(proj\.|contact\.|about\.|exp\.)/.test(key)) {
      el.innerHTML = value;
    } else {
      el.textContent = value;
    }
  });


  document.querySelectorAll('.language-flag').forEach(flag => {
    flag.classList.toggle('active', flag.getAttribute('data-lang') === lang);
  });

  
  localStorage.setItem('language', lang);
}

function hookLanguageSelector() {
  document.querySelectorAll('.language-flag').forEach(flag => {
    flag.addEventListener('click', () => {
      const lang = flag.getAttribute('data-lang');
      if (lang) applyLanguage(lang);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const initialLang = detectInitialLang();
  applyLanguage(initialLang);
  hookLanguageSelector();
  hookTypingRestartOnHome();
  hookEscapeToHome();
});

