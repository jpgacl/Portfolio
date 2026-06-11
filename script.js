const themeBtn = document.getElementById("theme-btn");
const langBtn = document.getElementById("lang-btn");

const translations = {

    pt: {

        heroRole:
        "Desenvolvedor Back-end | Estudante de Ciência da Computação na CESAR School",

        sobre:
        "Sobre Mim",

        aboutText:
        "Tenho 18 anos e estou no primeiro período de Ciência da Computação na CESAR School. Tenho interesse em desenvolvimento de software, cibersegurança e inteligência artificial, buscando desenvolver soluções e construindo uma base sólida, participando de projetos e aprimorando meus conhecimentos. Atualmente possuo 4 certificações de cursos na CISCO e SENAC.",

        skills:
        "Tecnologias",

        projects:
        "Projeto em Destaque",

        contact:
        "Contato",

        contactText:
        "Tem alguma oportunidade, projeto ou ideia? Envie uma mensagem.",

        associationText:
        "Jogo de cartas adaptado para idosos portadores de demência, no qual o usuário, por meio dos sons transmitidos por cada carta, precisa associá-la a um evento ou objeto do cotidiano. O projeto combina elementos de jogos de mesa com tecnologia RFID/NFC, criando uma experiência que une interação física e processamento digital. Seu desenvolvimento envolveu programação em C++, integração de hardware, leitura de tags RFID e implementação das regras do jogo.",

        hyroxText:
        "Sistema desenvolvido para gerenciamento de treinos de academia, permitindo o cadastro, edição e organização de fichas de treino. O projeto foi criado com foco na praticidade para alunos e profissionais, centralizando informações de exercícios e possibilitando alterações rápidas nas rotinas de treinamento. Seu desenvolvimento envolveu modelagem de dados, lógica de programação e construção de funcionalidades para cadastro, consulta e atualização de treinos.",

        interest1: "💻 Desenvolvimento de Software",
        interest2: "🤖 Inteligência Artificial",
        interest3: "🔐 Segurança da Informação",

        namePlaceholder: "Seu nome",
        emailPlaceholder: "Seu e-mail",
        messagePlaceholder: "Sua mensagem",
        sendBtn: "Enviar mensagem",

        footerText: "© 2026 João Pedro Guedes • Ciência da Computação • CESAR School",

        githubBtn: "GitHub",
        linkedinBtn: "LinkedIn",

    },

    en: {

        heroRole:
        "Back-end Developer | Computer Science Student at CESAR School",

        sobre:
        "About Me",

        aboutText:
        "I am 18 years old and currently studying Computer Science at CESAR School. I am interested in software development, cybersecurity and artificial intelligence, constantly seeking to build solutions, participate in projects and strengthen my technical foundation. I currently hold four certifications from CISCO and SENAC.",

        skills:
        "Technologies",

        projects:
        "Featured Projects",

        contact:
        "Contact",

        contactText:
        "Have an opportunity, project or idea? Send me a message.",

        associationText:
        "Card game adapted for elderly people with dementia, where users must associate sounds played by each card with everyday events or objects. The project combines board game mechanics with RFID/NFC technology, creating an experience that blends physical interaction and digital processing. Development involved C++ programming, hardware integration, RFID tag reading and implementation of game rules.",

        hyroxText:
        "System developed for gym workout management, allowing the creation, editing and organization of training plans. The project focuses on practicality for students and trainers, centralizing exercise information and enabling quick updates to workout routines. Development involved data modeling, programming logic and CRUD functionalities for workout management.",

        interest1: "💻 Software Development",
        interest2: "🤖 Artificial Intelligence",
        interest3: "🔐 Information Security",

        namePlaceholder: "Your name",
        emailPlaceholder: "Your e-mail",
        messagePlaceholder: "Your message",
        sendBtn: "Send message",

        footerText: "© 2026 João Pedro Guedes • Computer Science • CESAR School",

        githubBtn: "GitHub",
        linkedinBtn: "LinkedIn",

    }

};

let currentLang = "pt";

if (langBtn) {

    langBtn.addEventListener("click", () => {

        currentLang = currentLang === "pt" ? "en" : "pt";

        const t = translations[currentLang];

        const setText = (id, value) => {
            const element = document.getElementById(id);
            if (element) element.textContent = value;
        };

        const setPlaceholder = (id, value) => {
            const element = document.getElementById(id);
            if (element) element.placeholder = value;
        };

        // Textos principais
        setText("hero-role", t.heroRole);
        setText("sobre-title", t.sobre);
        setText("about-text", t.aboutText);
        setText("skills-title", t.skills);
        setText("projects-title", t.projects);
        setText("contact-title", t.contact);
        setText("contact-text", t.contactText);
        setText("association-description", t.associationText);
        setText("hyrox-description", t.hyroxText);

        // Interesses
        setText("interest-1", t.interest1);
        setText("interest-2", t.interest2);
        setText("interest-3", t.interest3);

        // Formulário de contato
        setPlaceholder("name-input", t.namePlaceholder);
        setPlaceholder("email-input", t.emailPlaceholder);
        setPlaceholder("message-input", t.messagePlaceholder);
        setText("send-btn", t.sendBtn);

        // Footer
        setText("footer-text", t.footerText);

        langBtn.textContent = currentLang === "pt" ? "EN" : "PT";

    });

}

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        const light = document.body.classList.contains("light-mode");

        localStorage.setItem("theme", light);

        themeBtn.textContent = light ? "☀️" : "🌙";

    });

}

if (localStorage.getItem("theme") === "true") {

    document.body.classList.add("light-mode");

    if (themeBtn) {
        themeBtn.textContent = "☀️";
    }

}