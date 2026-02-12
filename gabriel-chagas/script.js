// Funções JS do portfólio de Gabriel Chagas Lage
// Funções JS do portfólio de Gabriel Chagas Lage
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

// Funcionalidade de mudança de idioma
document.addEventListener('DOMContentLoaded', function() {
  // Selecionar as bandeiras de idioma
  const languageFlags = document.querySelectorAll('.language-flag');
  
  // Adicionar evento de clique para cada bandeira
  languageFlags.forEach(flag => {
    flag.addEventListener('click', function() {
      const lang = this.getAttribute('data-lang');
      
      // Alternar a classe 'active' entre as bandeiras
      languageFlags.forEach(f => f.classList.remove('active'));
      this.classList.add('active');
      
      // Mudar o idioma do site
      changeLanguage(lang);
    });
  });
  
  // Iniciar o site em inglês
  const englishFlag = document.querySelector('.language-flag[data-lang="en"]');
  if (englishFlag) {
    // Simular clique na bandeira dos EUA
    englishFlag.classList.add('active');
    document.querySelector('.language-flag[data-lang="pt"]').classList.remove('active');
    changeLanguage('en');
  }
  
  // Função para mudar o idioma
  function changeLanguage(lang) {
    // Dicionário de traduções
    const translations = {
      // Home section
      'typing-effect': {
        'pt': 'Gabriel Chagas Lage - Arquiteto de Soluções em Cloud',
        'en': 'Gabriel Chagas Lage - Cloud Solutions Architect'
      },
      'welcome-header': {
        'pt': '$ Bem-vindo ao meu Terminal Linux',
        'en': '$ Welcome to my Linux Terminal'
      },
      'job-title': {
        'pt': '⚡ Arquiteto de Soluções em Cloud | AWS Certified Professional',
        'en': '⚡ Cloud Solutions Architect | AWS Certified Professional'
      },
      
      // Experience section
      'architect-title': {
        'pt': 'Arquiteto de Soluções em Cloud Jr',
        'en': 'Junior Cloud Solutions Architect'
      },
      'forceone-company': {
        'pt': 'ForceOne • Tempo integral',
        'en': 'ForceOne • Full-time'
      },
      'architect-period': {
        'pt': 'Mai 2025 - Presente · 4 meses',
        'en': 'May 2025 - Present · 4 months'
      },
      'cloud-projects': {
        'pt': '• Participação em projetos de migração de sistemas para ambientes cloud',
        'en': '• Participation in system migration projects to cloud environments'
      },
      'devops-title': {
        'pt': 'Estagiário DevOps',
        'en': 'DevOps Intern'
      },
      'educat-company': {
        'pt': 'eduCAT Technology • Estágio',
        'en': 'eduCAT Technology • Internship'
      },
      'devops-period': {
        'pt': 'Ago 2023 - Mai 2025 · 1 ano 10 meses',
        'en': 'Aug 2023 - May 2025 · 1 year 10 months'
      },
      // Específico para a seção do segundo cargo (DevOps intern)
      'intern-description': {
        'pt': 'Desenvolvimento de habilidades em arquitetura de nuvem, projetos de migração, práticas DevOps e infraestrutura como código.',
        'en': 'Development of skills in cloud architecture, migration projects, DevOps practices, and infrastructure as code.'
      },
      'cloud-arch': {
        'pt': '• Desenvolvimento de habilidades em arquitetura de nuvem',
        'en': '• Development of skills in cloud architecture'
      },
      'migration': {
        'pt': '• Participação em projetos de migração e automação',
        'en': '• Participation in migration and automation projects'
      },
      'devops-practices': {
        'pt': '• Aprendizado de práticas DevOps e cloud computing',
        'en': '• Learning of DevOps practices and cloud computing'
      },
      'infra-code': {
        'pt': '• Suporte em projetos de infraestrutura como código',
        'en': '• Support in infrastructure as code projects'
      },
      'award': {
        'pt': '• 🏆 <strong>Funcionário Destaque ForceOne 2024</strong>',
        'en': '• 🏆 <strong>ForceOne Employee of the Year 2024</strong>'
      },
      'devops-title-2': {
        'pt': 'Estagiário DevOps',
        'en': 'DevOps Intern'
      },
      'educat-company-2': {
        'pt': 'eduCAT Technology • Belo Horizonte, MG',
        'en': 'eduCAT Technology • Belo Horizonte, MG, Brazil'
      },
      'devops-period-2': {
        'pt': 'Jun 2022 - Jul 2023 · 1 ano 2 meses',
        'en': 'Jun 2022 - Jul 2023 · 1 year 2 months'
      },
      'firebase': {
        'pt': '• Criação e monitoramento de projetos no Google Firebase',
        'en': '• Creation and monitoring of Google Firebase projects'
      },
      'tech-formation': {
        'pt': 'Formação técnica em informática com base em programação, redes e infraestrutura tecnológica.',
        'en': 'Technical education in computing with focus on programming, networks and technological infrastructure.'
      },
      
      // Textos das experiências
      'design-security': {
        'pt': '• Desenho e implementação de arquiteturas em nuvem com foco em segurança, escalabilidade e eficiência operacional',
        'en': '• Design and implementation of cloud architectures focused on security, scalability, and operational efficiency'
      },
      'tech-needs': {
        'pt': '• Proposição de soluções alinhadas às necessidades técnicas e de negócio',
        'en': '• Proposition of solutions aligned with technical and business needs'
      },
      'automation': {
        'pt': '• Criação de automações para gestão de infraestrutura',
        'en': '• Creation of automations for infrastructure management'
      },
      'finops': {
        'pt': '• Aplicação de práticas de FinOps para otimizar e controlar custos em nuvem',
        'en': '• Application of FinOps practices to optimize and control cloud costs'
      },
      'award-short': {
        'pt': '🏆 Funcionário Destaque ForceOne 2024',
        'en': '🏆 ForceOne Employee of the Year 2024'
      },
      
      // Adicionando manualmente traduções específicas que podem estar faltando
      'education-title': {
        'pt': 'Formação Acadêmica',
        'en': 'Education'
      },
      'experience-title': {
        'pt': 'Experiência Profissional',
        'en': 'Professional Experience'
      },
      
      // Outros textos da página
      'software-engineering': {
        'pt': 'Bacharelado em Engenharia de Software',
        'en': 'Bachelor of Software Engineering'
      },
      'tech-course': {
        'pt': 'Técnico em Informática',
        'en': 'Computer Technician'
      },
      'ongoing-degree': {
        'pt': 'Graduação em andamento com foco em desenvolvimento de software, arquitetura de sistemas e tecnologias emergentes.',
        'en': 'Ongoing degree focusing on software development, systems architecture, and emerging technologies.'
      },
      
      // Tradução das habilidades técnicas no terceiro cargo
      'container-orchestration': {
        'pt': '• Orquestração de containers utilizando Docker, Kubernetes e Helm',
        'en': '• Container orchestration using Docker, Kubernetes, and Helm'
      },
      'aws-implementation': {
        'pt': '• Implementação de sistemas na Cloud AWS (CodeBuild, Secret Manager, EC2, ECR, CodePipeline, Route 53, Lambda, IAM, CloudFront, S3)',
        'en': '• Implementation of systems in AWS Cloud (CodeBuild, Secret Manager, EC2, ECR, CodePipeline, Route 53, Lambda, IAM, CloudFront, S3)'
      },
      'nginx-management': {
        'pt': '• Gerenciamento de servidores NGINX',
        'en': '• Management of NGINX servers'
      },
      'terraform': {
        'pt': '• Automação de implantação usando Terraform',
        'en': '• Deployment automation using Terraform'
      },
      'jenkins': {
        'pt': '• Utilização do Jenkins para integração e implantação contínua',
        'en': '• Use of Jenkins for continuous integration and deployment'
      },
      'proxmox': {
        'pt': '• Administração do Proxmox para virtualização',
        'en': '• Administration of Proxmox for virtualization'
      },
      'mongodb': {
        'pt': '• Gerenciamento de instâncias MongoDB em ambiente Kubernetes',
        'en': '• Management of MongoDB instances in Kubernetes environment'
      },
      'aws-billing': {
        'pt': '• Administração do Billing na AWS',
        'en': '• Administration of AWS Billing'
      },
      
      // Navegação
      'nav-home': {
        'pt': '~/home',
        'en': '~/home'
      },
      'nav-about': {
        'pt': './about',
        'en': './about'
      },
      'nav-experience': {
        'pt': './experience',
        'en': './experience'
      },
      'nav-education': {
        'pt': './education',
        'en': './education'
      },
      'nav-certifications': {
        'pt': './certifications',
        'en': './certificates'
      },
      'nav-projects': {
        'pt': './projects',
        'en': './projects'
      },
      'nav-awards': {
        'pt': './awards',
        'en': './awards'
      },
      'nav-social': {
        'pt': './social-projects',
        'en': './social-projects'
      },
      'nav-contact': {
        'pt': './contact',
        'en': './contact'
      },
      // Home section - paragraphs
      'location': {
        'pt': '📍 Belo Horizonte, Minas Gerais, Brasil',
        'en': '📍 Belo Horizonte, Minas Gerais, Brazil'
      },
      'education-short': {
        'pt': '🎓 Engenharia de Software - PUC Minas',
        'en': '🎓 Software Engineering - PUC Minas'
      },
      'award-short': {
        'pt': '🏆 Funcionário Destaque ForceOne 2024',
        'en': '🏆 Employee of the Year ForceOne 2024'
      },
      
      // About section
      'about-title': {
        'pt': '$ cat about.md',
        'en': '$ cat about.md'
      },
      'about-p1': {
        'pt': 'Gabriel Chagas Lage é um profissional em ascensão na área de computação em nuvem e DevOps, com uma trajetória marcada por especialização contínua e certificações de alto nível na AWS. Hoje, atua como Arquiteto de Soluções em Cloud Jr na ForceOne, onde desenha e implementa arquiteturas robustas, seguras e escaláveis, sempre alinhando soluções técnicas às necessidades de negócio.',
        'en': 'Gabriel Chagas Lage is a rising professional in cloud computing and DevOps, with a career marked by continuous specialization and high-level AWS certifications. Today, he works as a Junior Cloud Solutions Architect at ForceOne, where he designs and implements robust, secure, and scalable architectures, always aligning technical solutions with business needs.'
      },
      'about-p2': {
        'pt': 'Sua experiência prática inclui projetos de migração para cloud, automação de infraestrutura, e aplicação de FinOps para manter custos sob controle sem comprometer a performance. Antes, desenvolveu uma sólida base como Estagiário DevOps na eduCAT Tecnologia, trabalhando com containers, orquestração (Kubernetes, Docker, Helm), infraestrutura como código (Jenkins, CodePipeline, Terraform) e gerenciamento de ambientes AWS.',
        'en': 'His practical experience includes cloud migration projects, infrastructure automation, and application of FinOps to keep costs under control without compromising performance. Previously, he developed a solid foundation as a DevOps Intern at eduCAT Tecnologia, working with containers, orchestration (Kubernetes, Docker, Helm), infrastructure as code (Jenkins, CodePipeline, Terraform) and AWS environment management.'
      },
      'about-p3': {
        'pt': 'No campo acadêmico, Gabriel está cursando Engenharia de Software na PUC Minas e já possui formação técnica em informática pelo Colégio COTEMIG. Seu portfólio de certificações AWS impressiona, incluindo níveis Professional, Associate e Foundational, reforçando sua capacidade de lidar com desafios complexos e arquiteturas de alto nível.',
        'en': 'In the academic field, Gabriel is studying Software Engineering at PUC Minas and already has technical training in computer science from Colégio COTEMIG. His AWS certification portfolio is impressive, including Professional, Associate and Foundational levels, reinforcing his ability to handle complex challenges and high-level architectures.'
      },
      
      // Certifications section
      'cert-header': {
        'pt': '$ find /certifications -name "*.cert"',
        'en': '$ find /certifications -name "*.cert"'
      },
      'pro-architect': {
        'pt': 'AWS Certified Solutions Architect – Professional',
        'en': 'AWS Certified Solutions Architect – Professional'
      },
      'pro-desc': {
        'pt': 'Certificação avançada que valida competências em design e implementação de arquiteturas distribuídas e sistemas na AWS. Demonstra expertise em arquiteturas complexas, migração para cloud e otimização de custos.',
        'en': 'Advanced certification that validates skills in designing and implementing distributed architectures and systems on AWS. Demonstrates expertise in complex architectures, cloud migration, and cost optimization.'
      },
      'view-credential': {
        'pt': '🔗 Ver Credencial',
        'en': '🔗 View Credential'
      },
      'sysops-admin': {
        'pt': 'AWS Certified SysOps Administrator – Associate',
        'en': 'AWS Certified SysOps Administrator – Associate'
      },
      'sys-ops': {
        'pt': 'Certificação que comprova habilidades em administração de sistemas na AWS, incluindo monitoramento, troubleshooting, automação de tarefas operacionais e implementação de práticas de segurança.',
        'en': 'Certification that proves skills in AWS system administration, including monitoring, troubleshooting, automation of operational tasks, and implementation of security practices.'
      },
      'associate-architect': {
        'pt': 'AWS Certified Solutions Architect – Associate',
        'en': 'AWS Certified Solutions Architect – Associate'
      },
      'associate-desc': {
        'pt': 'Validação de conhecimentos em arquitetura de soluções na AWS, incluindo design de aplicações resilientes, seguras e escaláveis na nuvem usando os serviços AWS.',
        'en': 'Validation of knowledge in AWS solution architecture, including designing resilient, secure, and scalable applications in the cloud using AWS services.'
      },
      'cloud-practitioner': {
        'pt': 'AWS Certified Cloud Practitioner',
        'en': 'AWS Certified Cloud Practitioner'
      }
      // Adicione mais traduções conforme necessário
    };
    
    // Aplicar traduções
    for (let id in translations) {
      const element = document.getElementById(id);
      if (element && translations[id][lang]) {
        // Para elementos com tags HTML internas (como <strong>), usamos innerHTML
        if (id === 'award' || id.startsWith('view-credential')) {
          element.innerHTML = translations[id][lang];
          console.log(`Traduzindo ${id} para ${lang}: ${translations[id][lang]}`);
        } else {
          element.textContent = translations[id][lang];
        }
      }
    }
    
    // Garantir que elementos específicos sejam traduzidos corretamente
    setTimeout(() => {
      const awardElement = document.getElementById('award');
      if (awardElement && translations['award'] && translations['award'][lang]) {
        awardElement.innerHTML = translations['award'][lang];
        console.log(`Forçando tradução de award: ${translations['award'][lang]}`);
      }
      
      // Traduzir também os outros elementos da descrição do estagiário
      const elements = ['cloud-arch', 'migration', 'devops-practices', 'infra-code', 'award'];
      elements.forEach(id => {
        const el = document.getElementById(id);
        if (el && translations[id] && translations[id][lang]) {
          el.innerHTML = translations[id][lang];
          console.log(`Traduzindo elemento ${id} para ${lang}`);
        }
      });
    }, 100); // Pequeno atraso para garantir que todos os elementos foram carregados
    
    // Traduzir os links de credenciais que compartilham o mesmo texto
    if (translations['view-credential'] && translations['view-credential'][lang]) {
      const credLinks = document.querySelectorAll('[id^="view-credential-"]');
      credLinks.forEach(link => {
        link.innerHTML = translations['view-credential'][lang];
      });
    }
  }
});

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

// Interação terminal-like
// ESC volta para home
// Adiciona classe ativa ao botão home
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    showSection('home');
    document.querySelector('.nav-btn').classList.add('active');
  }
});

// Funcionalidade de troca de idioma
document.addEventListener('DOMContentLoaded', function() {
  // Definir o idioma inglês como padrão
  let currentLanguage = 'en';
  localStorage.setItem('language', currentLanguage);
  
  // Aplicar o idioma ao carregar a página
  applyLanguage(currentLanguage);
  
  // Selecionar as bandeiras de idioma
  const languageFlags = document.querySelectorAll('.language-flag');
  
  // Atualizar classe active na bandeira correta
  languageFlags.forEach(flag => {
    flag.classList.toggle('active', flag.getAttribute('data-lang') === currentLanguage);
  });
  
  // Adicionar evento de clique às bandeiras
  languageFlags.forEach(flag => {
    flag.addEventListener('click', function() {
      const language = this.getAttribute('data-lang');
      
      // Mudar idioma apenas se for diferente do atual
      if (language !== currentLanguage) {
        currentLanguage = language;
        
        // Salvar a preferência do usuário
        localStorage.setItem('language', language);
        
        // Aplicar o idioma selecionado
        applyLanguage(language);
        
        // Atualizar a aparência das bandeiras
        languageFlags.forEach(f => {
          f.classList.toggle('active', f.getAttribute('data-lang') === language);
        });
      }
    });
  });
});

// Função para obter o idioma atual
function getCurrentLanguage() {
  return localStorage.getItem('language') || 'en';
}

// Função para aplicar o idioma selecionado
function applyLanguage(language) {
  // Atualizar o atributo lang do HTML para melhorar acessibilidade e SEO
  document.documentElement.lang = language === 'pt' ? 'pt-br' : 'en';
  
  // Dicionário de traduções
  const translations = {
    // Navegação
    'navigation': {
      'pt': {
        'home': '~/home',
        'about': './about',
        'experience': './experience',
        'education': './education',
        'certifications': './certificações',
        'projects': './projetos',
        'awards': './prêmios',
        'social-projects': './projetos-sociais',
        'contact': './contato'
      },
      'en': {
        'home': '~/home',
        'about': './about',
        'experience': './experience',
        'education': './education',
        'certifications': './certifications',
        'projects': './projects',
        'awards': './awards',
        'social-projects': './social-projects',
        'contact': './contact'
      }
    },
    // Conteúdo da Home
    'home': {
      'pt': {
        'welcome_header': '$ Bem-vindo ao meu Terminal Linux',
        'job_title': '⚡ Arquiteto de Soluções em Cloud | AWS Certified Professional',
        'typing_effect': 'Gabriel Chagas Lage - Arquiteto de Soluções em Cloud'
      },
      'en': {
        'welcome_header': '$ Welcome to my Linux Terminal',
        'job_title': '⚡ Cloud Solutions Architect | AWS Certified Professional',
        'typing_effect': 'Gabriel Chagas Lage - Cloud Solutions Architect'
      }
    },
    // About
    'about': {
      'pt': {
        'bio_p1': 'Gabriel Chagas Lage é um profissional em ascensão na área de computação em nuvem e DevOps, com uma trajetória marcada por especialização contínua e certificações de alto nível na AWS. Hoje, atua como Arquiteto de Soluções em Cloud Jr na ForceOne, onde desenha e implementa arquiteturas robustas, seguras e escaláveis, sempre alinhando soluções técnicas às necessidades de negócio.',
        'bio_p2': 'Sua experiência prática inclui projetos de migração para cloud, automação de infraestrutura, e aplicação de FinOps para manter custos sob controle sem comprometer a performance. Antes, desenvolveu uma sólida base como Estagiário DevOps na eduCAT Tecnologia, trabalhando com containers, orquestração (Kubernetes, Docker, Helm), infraestrutura como código (Jenkins, CodePipeline, Terraform) e gerenciamento de ambientes AWS.',
        'bio_p3': 'No campo acadêmico, Gabriel está cursando Engenharia de Software na PUC Minas e já possui formação técnica em informática pelo Colégio COTEMIG. Seu portfólio de certificações AWS impressiona, incluindo níveis Professional, Associate e Foundational, reforçando sua capacidade de lidar com desafios complexos e arquiteturas de alto nível.'
      },
      'en': {
        'bio_p1': 'Gabriel Chagas Lage is a rising professional in cloud computing and DevOps, with a trajectory marked by continuous specialization and high-level AWS certifications. Currently, he works as a Jr Cloud Solutions Architect at ForceOne, where he designs and implements robust, secure, and scalable architectures, always aligning technical solutions with business needs.',
        'bio_p2': 'His practical experience includes cloud migration projects, infrastructure automation, and FinOps application to keep costs under control without compromising performance. Previously, he developed a solid foundation as a DevOps Intern at eduCAT Tecnologia, working with containers, orchestration (Kubernetes, Docker, Helm), infrastructure as code (Jenkins, CodePipeline, Terraform), and AWS environment management.',
        'bio_p3': 'In the academic field, Gabriel is pursuing a Software Engineering degree at PUC Minas and already has technical training in computer science from Colégio COTEMIG. His portfolio of AWS certifications is impressive, including Professional, Associate, and Foundational levels, reinforcing his ability to handle complex challenges and high-level architectures.'
      }
    },
    // Awards
    'awards': {
      'pt': {
        'forceone_award': 'Reconhecimento pelo desempenho, dedicação e resultados excepcionais em projetos de Cloud Computing e DevOps na ForceOne.'
      },
      'en': {
        'forceone_award': 'Recognition for outstanding performance, dedication, and exceptional results in Cloud Computing and DevOps projects at ForceOne.'
      }
    },
    // Experience
    'experience': {
      'pt': {
        'cloud_projects': '• Participação em projetos de migração de sistemas para ambientes cloud',
        'cloud_arch': '• Desenvolvimento de habilidades em arquitetura de nuvem',
        'migration': '• Participação em projetos de migração e automação',
        'infra_code': '• Suporte em projetos de infraestrutura como código',
        'firebase': '• Criação e monitoramento de projetos no Google Firebase',
        'architect_title': 'Arquiteto de Soluções em Cloud Jr',
        'devops_title': 'Estagiário',
        'web_dev_title': 'Desenvolvedor Web',
        'forceone': 'ForceOne • Tempo integral',
        'forceone': 'ForceOne • Estágio',
        'webdev': 'Freelance • Projeto',
        'present': 'Mai 2025 - Presente · 4 meses',
        'devops_period': 'Ago 2023 - Mai 2025 · 1 ano 10 meses',
        'web_period': 'Jan 2023 - Jul 2023 · 7 meses'
      },
      'en': {
        'cloud_projects': '• Participation in system migration projects to cloud environments',
        'cloud_arch': '• Development of cloud architecture skills',
        'migration': '• Participation in migration and automation projects',
        'infra_code': '• Support in infrastructure as code projects',
        'firebase': '• Creation and monitoring of Google Firebase projects',
        'architect_title': 'Jr Cloud Solutions Architect',
        'devops_title': 'DevOps Intern',
        'web_dev_title': 'Web Developer',
        'forceone': 'ForceOne • Full-time',
        'educat': 'eduCAT Technology • Internship',
        'webdev': 'Freelance • Project',
        'present': 'May 2025 - Present · 4 months',
        'devops_period': 'Aug 2023 - May 2025 · 1 year 10 months',
        'web_period': 'Jan 2023 - Jul 2023 · 7 months'
      }
    },
    // Education
    'education': {
      'pt': {
        'tech_formation': 'Formação técnica em informática com base em programação, redes e infraestrutura tecnológica.'
      },
      'en': {
        'tech_formation': 'Technical training in computer science with a foundation in programming, networks, and technological infrastructure.'
      }
    },
    // Certifications
    'certifications': {
      'pt': {
        'sys_ops': 'Certificação que comprova habilidades em administração de sistemas na AWS, incluindo monitoramento, troubleshooting, automação de tarefas operacionais e implementação de práticas de segurança.'
      },
      'en': {
        'sys_ops': 'Certification that proves skills in AWS systems administration, including monitoring, troubleshooting, automation of operational tasks, and implementation of security practices.'
      }
    },
    // Social Projects
    'social': {
      'pt': {
        'academic': 'Participação em projeto acadêmico focado no desenvolvimento de soluções de software para problemas reais da comunidade, aplicando conhecimentos de engenharia de software em projetos de impacto social.',
        'mentoring': 'Mentoria e coordenação de programa voltado para desenvolvimento pessoal e profissional de jovens. Responsável pela organização de atividades educacionais e desenvolvimento de habilidades tecnológicas.'
      },
      'en': {
        'academic': 'Participation in an academic project focused on developing software solutions for real community problems, applying software engineering knowledge in social impact projects.',
        'mentoring': 'Mentoring and coordination of a program aimed at the personal and professional development of young people. Responsible for organizing educational activities and developing technological skills.'
      }
    },
    // Contact
    'contact': {
      'pt': {
        'thanks': 'Obrigado pela visita! Entre em contato para discutir oportunidades de colaboração.'
      },
      'en': {
        'thanks': 'Thank you for visiting! Get in touch to discuss collaboration opportunities.'
      }
    }
  };
  
  // Atualizar navegação
  const navButtons = document.querySelectorAll('.nav-btn');
  navButtons.forEach(btn => {
    const section = btn.getAttribute('onclick').match(/'([^']+)'/)[1];
    if (translations.navigation[language][section]) {
      btn.textContent = translations.navigation[language][section];
    }
  });
  
  // Atualizar o título do terminal
  const terminalTitle = document.querySelector('.terminal-title');
  if (terminalTitle) {
    terminalTitle.textContent = language === 'pt' ? 
      'gabriel@linux:~$ Arquiteto de Soluções em Cloud' :
      'gabriel@linux:~$ Cloud Solutions Architect';
  }
  
  // Atualizar o texto de digitação na home
  const typingEffect = document.getElementById('typing-effect');
  if (typingEffect) {
    typingEffect.textContent = translations.home[language].typing_effect;
    
    // Reiniciar o efeito de digitação
    typingEffect.style.animation = 'none';
    setTimeout(() => {
      typingEffect.style.animation = 'typing 3s steps(40, end), blink-caret 0.75s step-end infinite';
    }, 10);
  }
  
  // Atualizar texto de boas-vindas
  const welcomeHeader = document.getElementById('welcome-header');
  if (welcomeHeader) {
    welcomeHeader.textContent = translations.home[language].welcome_header;
  }
  
  // Atualizar título do cargo
  const jobTitle = document.getElementById('job-title');
  if (jobTitle) {
    jobTitle.textContent = translations.home[language].job_title;
  }
  
  // Atualizar textos da seção About
  document.querySelectorAll('#about p').forEach((p, index) => {
    const bioKey = `bio_p${index + 1}`;
    if (translations.about[language][bioKey]) {
      p.textContent = translations.about[language][bioKey];
    }
  });
  
  // Atualizar textos da seção Awards
  const forceoneAward = document.querySelector('#awards p');
  if (forceoneAward && translations.awards[language].forceone_award) {
    forceoneAward.textContent = translations.awards[language].forceone_award;
  }
  
  // Atualizar textos da seção Experience
  // Job bullets
  const cloudProjects = document.getElementById('cloud-projects');
  const cloudArch = document.getElementById('cloud-arch');
  const migration = document.getElementById('migration');
  const infraCode = document.getElementById('infra-code');
  const firebase = document.getElementById('firebase');
  
  // Job titles and companies
  const architectTitle = document.getElementById('architect-title');
  const forceoneCompany = document.getElementById('forceone-company');
  const architectPeriod = document.getElementById('architect-period');
  const devopsTitle = document.getElementById('devops-title');
  const educatCompany = document.getElementById('educat-company');
  const devopsPeriod = document.getElementById('devops-period');
  const devopsTitle2 = document.getElementById('devops-title-2');
  const educatCompany2 = document.getElementById('educat-company-2');
  const devopsPeriod2 = document.getElementById('devops-period-2');
  
  // Update experience bullet points
  if (cloudProjects) cloudProjects.innerHTML = translations.experience[language].cloud_projects;
  if (cloudArch) cloudArch.innerHTML = translations.experience[language].cloud_arch;
  if (migration) migration.innerHTML = translations.experience[language].migration;
  if (infraCode) infraCode.innerHTML = translations.experience[language].infra_code;
  if (firebase) firebase.innerHTML = translations.experience[language].firebase;
  
  // Update job titles and companies
  if (architectTitle) architectTitle.textContent = translations.experience[language].architect_title;
  if (forceoneCompany) forceoneCompany.textContent = translations.experience[language].forceone;
  if (architectPeriod) architectPeriod.textContent = translations.experience[language].present;
  if (devopsTitle) devopsTitle.textContent = translations.experience[language].devops_title;
  if (educatCompany) educatCompany.textContent = translations.experience[language].educat;
  if (devopsPeriod) devopsPeriod.textContent = translations.experience[language].devops_period;
  if (devopsTitle2) devopsTitle2.textContent = translations.experience[language].devops_title;
  
  // Atualizar textos da seção Education
  const techFormation = document.getElementById('tech-formation');
  if (techFormation) {
    techFormation.textContent = translations.education[language].tech_formation;
  }
  
  // Atualizar textos da seção Certifications
  const sysOps = document.getElementById('sys-ops');
  if (sysOps) {
    sysOps.innerHTML = translations.certifications[language].sys_ops;
  }
  
  // Atualizar textos da seção Social Projects
  const academic = document.getElementById('social-academic');
  const mentoring = document.getElementById('social-mentoring');
  if (academic) academic.textContent = translations.social[language].academic;
  if (mentoring) mentoring.textContent = translations.social[language].mentoring;
  
  // Atualizar textos da seção Contact
  const thanks = document.getElementById('contact-thanks');
  if (thanks) {
    thanks.textContent = translations.contact[language].thanks;
  }
  
  // Atualizar comando de agradecimento
  const thankYouCmd = document.getElementById('thank-you-cmd');
  if (thankYouCmd) {
    thankYouCmd.textContent = language === 'pt' ? 
      'echo "Obrigado pela visita!"' : 
      'echo "Thank you for visiting!"';
  }
}
