// Système de traduction
const translations = {
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.projects": "Mes projets",
    "nav.about": "À propos",
    "nav.contact": "CONTACT",

    // Hero section
    "hero.title": "Développeur Web Full-Stack",
    "hero.about": "À PROPOS DE MOI",

    // Projects section
    "projects.title": "Mes projets",
    "projects.year": "année_",
    "projects.role": "rôle_",
    "projects.live-demo": "Live Demo ↗",
    "projects.github": "Github ↗",

    // Booki project
    "projects.booki.description":
      "Site de réservation d'hébergements et d'activités touristiques. Les défis majeurs ont été la création d'une mise en page responsive adaptée à tous les écrans. Ce projet m'a permis de développer mes compétences en HTML et CSS, notamment la création de layouts flexibles, l'utilisation des media queries, et la mise en place d'une architecture CSS maintenable.",
    "projects.booki.role": "Front-end Developer",

    // Kasa project
    "projects.kasa.description":
      "Application de location immobilière développée avec React et React Router. Les principaux défis ont été la création d'une architecture modulaire avec des composants réutilisables, l'implémentation d'un système de routage complet avec gestion des paramètres d'URL. Il a fallut créer un carrousel d'images. Le projet a été développé avec Vite et utilise Sass pour le styling, sans librairie React externe. J'ai structuré le code en suivant les bonnes pratiques React : un composant par fichier, utilisation des props et du state, gestion des événements, manipulation des listes avec map. La gestion des routes a été centralisée dans un seul fichier, avec une page 404 pour les routes inexistantes. Ce projet m'a permis de développer mes compétences en React, notamment la création de composants modulaires, la gestion du routage, et l'organisation du code selon les meilleures pratiques.",
    "projects.kasa.role": "Front-end Developer",

    // QuizMaster project
    "projects.quizmaster.description":
      "Application mobile de quiz développée avec Swift et SwiftUI. Les utilisateurs peuvent tester leurs connaissances à travers différents niveaux de difficulté. L'application se connecte à une API REST personnalisée pour récupérer les questions. Les défis majeurs ont été la création d'une interface utilisateur intuitive avec SwiftUI, la gestion des états de l'application, et l'intégration avec l'API. Ce projet m'a permis de développer mes compétences en développement iOS natif et en architecture d'API.",
    "projects.quizmaster.role": "iOS Developer",

    // Mon Vieux Grimoire project
    "projects.grimoire.description":
      "Plateforme communautaire de notation et de partage de livres. Les utilisateurs peuvent publier des livres et les évaluer, créant ainsi une communauté de lecteurs passionnés. Le backend a été développé avec Node.js et Express, utilisant une architecture RESTful. La base de données MongoDB permet une gestion flexible des données des livres et des utilisateurs. Les défis majeurs ont été la mise en place d'un système d'authentification sécurisé, la gestion des relations entre les collections MongoDB, et l'optimisation des performances de l'API.",
    "projects.grimoire.role": "Backend Developer",

    // About section
    "about.title": "À propos de moi",
    "about.skills.fullstack.title": "Développeur Full-Stack",
    "about.skills.fullstack.description":
      "Formé au développement web avec OpenClassrooms, je développe des applications web complètes et performantes. J'utilise des technologies modernes comme React, Vue.js, Node.js, etc. pour concevoir des solutions sur-mesure, évolutives et adaptées aux besoins des utilisateurs.",
    "about.skills.performance.title": "Optimisation de code et performances",
    "about.skills.performance.description":
      "Un site rapide, c'est une meilleure expérience utilisateur et un meilleur référencement. J'optimise le code en réduisant le temps de chargement, en minimisant les fichiers CSS/JS et en appliquant des bonnes pratiques comme le lazy loading et la mise en cache.",
    "about.skills.seo.title": "Référencement SEO",
    "about.skills.seo.description":
      "Être en ligne, c'est bien. Être trouvé, c'est mieux ! J'optimise votre site pour qu'il soit bien référencé sur Google : structure du code, balises stratégiques, mais plus particuliers et temps de chargement optimisé. Objectif ? Améliorer votre classement, attirer plus de visiteurs et générer plus de leads.",
    "about.technologies.title": "Les technologies que j'utilise_",

    // Contact section
    "contact.title": "Besoin d'un développeur pour votre projet ?",
    "contact.subtitle": "Discutons-en ensemble.",
    "contact.description":
      "Que ce soit pour un site web, une application ou une optimisation, je suis à l'écoute de vos besoins. Décrivez-moi votre projet et voyons comment je peux vous aider !",
    "contact.form.name": "votre nom_",
    "contact.form.email": "votre mail_",
    "contact.form.message": "votre message_",
    "contact.form.submit": "ENVOYER VOTRE MESSAGE",
    "contact.form.success":
      "Message envoyé avec succès ! Je vous répondrai bientôt.",
    "contact.form.error": "Erreur lors de l'envoi. Veuillez réessayer.",
    "contact.form.sending": "Envoi en cours...",
    "contact.form.validation.name": "Veuillez entrer votre nom.",
    "contact.form.validation.email":
      "Veuillez entrer une adresse email valide.",
    "contact.form.validation.message": "Veuillez entrer votre message.",
    "contact.form.validation.emailFormat": "Format d'email invalide.",
    "contact.form.limit.daily":
      "Limite quotidienne atteinte. Réessayez demain.",
    "contact.form.limit.weekly":
      "Limite hebdomadaire atteinte. Réessayez la semaine prochaine.",
    "contact.form.limit.monthly":
      "Limite mensuelle atteinte. Réessayez le mois prochain.",

    // Footer
    "footer.copyright": "© 2025 - Jérémy Pitton - Développeur Web Full-Stack",
  },

  en: {
    // Navigation
    "nav.home": "Home",
    "nav.projects": "My projects",
    "nav.about": "About",
    "nav.contact": "CONTACT",

    // Hero section
    "hero.title": "Full-Stack Web Developer",
    "hero.about": "ABOUT ME",

    // Projects section
    "projects.title": "My projects",
    "projects.year": "year_",
    "projects.role": "role_",
    "projects.live-demo": "Live Demo ↗",
    "projects.github": "Github ↗",

    // Booki project
    "projects.booki.description":
      "Accommodation and tourist activity booking website. The main challenges were creating a responsive layout adapted to all screens. This project allowed me to develop my HTML and CSS skills, particularly creating flexible layouts, using media queries, and implementing a maintainable CSS architecture.",
    "projects.booki.role": "Front-end Developer",

    // Kasa project
    "projects.kasa.description":
      "Real estate rental application developed with React and React Router. The main challenges were creating a modular architecture with reusable components, implementing a complete routing system with URL parameter management. I had to create an image carousel. The project was developed with Vite and uses Sass for styling, without external React libraries. I structured the code following React best practices: one component per file, using props and state, event handling, list manipulation with map. Route management was centralized in a single file, with a 404 page for non-existent routes. This project allowed me to develop my React skills, particularly creating modular components, routing management, and code organization according to best practices.",
    "projects.kasa.role": "Front-end Developer",

    // QuizMaster project
    "projects.quizmaster.description":
      "Mobile quiz application developed with Swift and SwiftUI. Users can test their knowledge through different difficulty levels. The application connects to a custom REST API to retrieve questions. The main challenges were creating an intuitive user interface with SwiftUI, managing application states, and API integration. This project allowed me to develop my native iOS development and API architecture skills.",
    "projects.quizmaster.role": "iOS Developer",

    // Mon Vieux Grimoire project
    "projects.grimoire.description":
      "Community platform for book rating and sharing. Users can publish books and rate them, creating a community of passionate readers. The backend was developed with Node.js and Express, using a RESTful architecture. The MongoDB database allows flexible management of book and user data. The main challenges were implementing a secure authentication system, managing relationships between MongoDB collections, and API performance optimization.",
    "projects.grimoire.role": "Backend Developer",

    // About section
    "about.title": "About me",
    "about.skills.fullstack.title": "Full-Stack Developer",
    "about.skills.fullstack.description":
      "Trained in web development with OpenClassrooms, I develop complete and performant web applications. I use modern technologies like React, Vue.js, Node.js, etc. to design custom, scalable solutions adapted to user needs.",
    "about.skills.performance.title": "Code optimization and performance",
    "about.skills.performance.description":
      "A fast website means a better user experience and better SEO. I optimize code by reducing loading time, minimizing CSS/JS files and applying best practices like lazy loading and caching.",
    "about.skills.seo.title": "SEO optimization",
    "about.skills.seo.description":
      "Being online is good. Being found is better! I optimize your site to be well referenced on Google: code structure, strategic tags, but more particularly optimized loading time. Goal? Improve your ranking, attract more visitors and generate more leads.",
    "about.technologies.title": "Technologies I use_",

    // Contact section
    "contact.title": "Need a developer for your project?",
    "contact.subtitle": "Let's discuss it together.",
    "contact.description":
      "Whether it's for a website, an application or optimization, I'm listening to your needs. Describe your project to me and let's see how I can help you!",
    "contact.form.name": "your name_",
    "contact.form.email": "your email_",
    "contact.form.message": "your message_",
    "contact.form.submit": "SEND YOUR MESSAGE",
    "contact.form.success":
      "Message sent successfully! I'll get back to you soon.",
    "contact.form.error": "Error sending message. Please try again.",
    "contact.form.sending": "Sending...",
    "contact.form.validation.name": "Please enter your name.",
    "contact.form.validation.email": "Please enter a valid email address.",
    "contact.form.validation.message": "Please enter your message.",
    "contact.form.validation.emailFormat": "Invalid email format.",
    "contact.form.limit.daily":
      "Daily limit reached. Please try again tomorrow.",
    "contact.form.limit.weekly":
      "Weekly limit reached. Please try again next week.",
    "contact.form.limit.monthly":
      "Monthly limit reached. Please try again next month.",

    // Footer
    "footer.copyright": "© 2025 - Jérémy Pitton - Full-Stack Web Developer",
  },
};

// Fonction pour traduire le contenu
function translatePage(language) {
  const elements = document.querySelectorAll("[data-translate]");

  elements.forEach((element) => {
    const key = element.getAttribute("data-translate");
    if (translations[language] && translations[language][key]) {
      element.textContent = translations[language][key];

      // Cas spécial pour le bouton "À propos de moi" en version mobile
      if (key === "hero.about") {
        // Ajouter l'attribut data-lang pour le CSS
        element.setAttribute("data-lang", language);
      }
    }
  });

  // Mettre à jour l'attribut lang du HTML
  document.documentElement.lang = language;

  // Sauvegarder la langue préférée
  localStorage.setItem("preferred-language", language);
}

// Fonction pour initialiser la langue
function initializeLanguage() {
  const savedLanguage = localStorage.getItem("preferred-language") || "fr";
  translatePage(savedLanguage);

  // Mettre à jour les boutons de langue (desktop et mobile)
  const langButtons = document.querySelectorAll(".lang-btn");
  langButtons.forEach((btn) => {
    btn.classList.remove("active");
    if (btn.getAttribute("data-lang") === savedLanguage) {
      btn.classList.add("active");
    }
  });
}

// Gestionnaire d'événements pour les boutons de langue
document.addEventListener("DOMContentLoaded", function () {
  const langButtons = document.querySelectorAll(".lang-btn");

  langButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const selectedLang = this.getAttribute("data-lang");

      // Mettre à jour l'état actif des boutons (navigation et hero)
      langButtons.forEach((btn) => btn.classList.remove("active"));
      // Activer le bouton correspondant dans les deux sélecteurs
      document
        .querySelectorAll(`[data-lang="${selectedLang}"]`)
        .forEach((btn) => {
          btn.classList.add("active");
        });

      // Traduire la page
      translatePage(selectedLang);
    });
  });

  // Initialiser la langue au chargement
  initializeLanguage();
});

// Navigation et défilement (code existant)
const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section");

// Fonction pour mettre à jour le lien actif
const updateActiveLink = (targetId) => {
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === targetId) {
      link.classList.add("active");
    }
  });
};

// Gestionnaire d'événements pour les liens de navigation
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");

    // Si c'est le lien Accueil, retourner en haut de la page
    if (targetId === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      updateActiveLink("#");
      return;
    }

    // Sinon, défilement vers la section cible
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
      updateActiveLink(targetId);
    }
  });
});

// Observer pour mettre à jour le lien actif pendant le défilement
const observerOptions = {
  root: null,
  rootMargin: "-20% 0px -20% 0px",
  threshold: 0.2,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const sectionId = "#" + entry.target.id;
      updateActiveLink(sectionId);
    }
  });
}, observerOptions);

sections.forEach((section) => {
  observer.observe(section);
});

// Gestion du formulaire de contact
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", handleFormSubmission);

    // Vérifier les limites de soumission au chargement
    checkSubmissionLimits();
  }
});

function handleFormSubmission(e) {
  e.preventDefault();

  const form = e.target;
  const submitButton = form.querySelector('button[type="submit"]');
  const originalButtonText = submitButton.textContent;
  const currentLang = document.documentElement.lang || "fr";

  // Valider le formulaire avant l'envoi
  const validationResult = validateForm(form, currentLang);
  if (!validationResult.isValid) {
    showMessage(validationResult.message, "error");
    return;
  }

  // Changer le texte du bouton pendant l'envoi
  submitButton.textContent = translations[currentLang]["contact.form.sending"];
  submitButton.disabled = true;

  // Créer FormData à partir du formulaire
  const formData = new FormData(form);

  // Envoyer les données à Formspree
  fetch(form.action, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        // Succès - incrémenter le compteur de soumissions
        incrementSubmissionCount();

        showMessage(
          translations[currentLang]["contact.form.success"],
          "success"
        );
        form.reset(); // Vider le formulaire
      } else {
        // Erreur
        showMessage(translations[currentLang]["contact.form.error"], "error");
      }
    })
    .catch((error) => {
      // Erreur réseau
      showMessage(translations[currentLang]["contact.form.error"], "error");
      console.error("Erreur:", error);
    })
    .finally(() => {
      // Restaurer le bouton
      submitButton.textContent = originalButtonText;
      submitButton.disabled = false;
    });
}

function validateForm(form, language) {
  const name = form.querySelector('input[name="name"]').value.trim();
  const email = form.querySelector('input[name="email"]').value.trim();
  const message = form.querySelector('textarea[name="message"]').value.trim();

  // Validation du nom
  if (!name) {
    return {
      isValid: false,
      message: translations[language]["contact.form.validation.name"],
    };
  }

  // Validation de l'email
  if (!email) {
    return {
      isValid: false,
      message: translations[language]["contact.form.validation.email"],
    };
  }

  // Validation du format email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      isValid: false,
      message: translations[language]["contact.form.validation.emailFormat"],
    };
  }

  // Validation du message
  if (!message) {
    return {
      isValid: false,
      message: translations[language]["contact.form.validation.message"],
    };
  }

  // Si tout est valide
  return { isValid: true };
}

// Configuration des limites de soumission
const SUBMISSION_LIMITS = {
  daily: 5, // Maximum 5 soumissions par jour
  weekly: 20, // Maximum 20 soumissions par semaine
  monthly: 50, // Maximum 50 soumissions par mois
};

// Fonction pour vérifier les limites de soumission
function checkSubmissionLimits() {
  const today = new Date().toDateString();
  const thisWeek = getWeekNumber(new Date());
  const thisMonth = new Date().getMonth() + "-" + new Date().getFullYear();

  const dailyCount = getSubmissionCount("daily", today);
  const weeklyCount = getSubmissionCount("weekly", thisWeek);
  const monthlyCount = getSubmissionCount("monthly", thisMonth);

  const currentLang = document.documentElement.lang || "fr";

  // Vérifier les limites
  if (dailyCount >= SUBMISSION_LIMITS.daily) {
    disableForm(
      translations[currentLang]["contact.form.limit.daily"] ||
        "Limite quotidienne atteinte. Réessayez demain."
    );
    return;
  }

  if (weeklyCount >= SUBMISSION_LIMITS.weekly) {
    disableForm(
      translations[currentLang]["contact.form.limit.weekly"] ||
        "Limite hebdomadaire atteinte. Réessayez la semaine prochaine."
    );
    return;
  }

  if (monthlyCount >= SUBMISSION_LIMITS.monthly) {
    disableForm(
      translations[currentLang]["contact.form.limit.monthly"] ||
        "Limite mensuelle atteinte. Réessayez le mois prochain."
    );
    return;
  }
}

// Fonction pour obtenir le numéro de semaine
function getWeekNumber(date) {
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  const pastDaysOfYear = (date - firstDayOfYear) / 86400000;
  return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}

// Fonction pour obtenir le nombre de soumissions
function getSubmissionCount(period, key) {
  const storageKey = `formspree_submissions_${period}_${key}`;
  const count = localStorage.getItem(storageKey);
  return count ? parseInt(count) : 0;
}

// Fonction pour incrémenter le compteur de soumissions
function incrementSubmissionCount() {
  const today = new Date().toDateString();
  const thisWeek = getWeekNumber(new Date());
  const thisMonth = new Date().getMonth() + "-" + new Date().getFullYear();

  // Incrémenter les compteurs
  incrementCounter("daily", today);
  incrementCounter("weekly", thisWeek);
  incrementCounter("monthly", thisMonth);
}

// Fonction pour incrémenter un compteur spécifique
function incrementCounter(period, key) {
  const storageKey = `formspree_submissions_${period}_${key}`;
  const currentCount = getSubmissionCount(period, key);
  localStorage.setItem(storageKey, currentCount + 1);
}

// Fonction pour désactiver le formulaire
function disableForm(message) {
  const contactForm = document.getElementById("contact-form");
  const submitButton = contactForm.querySelector('button[type="submit"]');

  // Désactiver le formulaire
  contactForm.style.opacity = "0.6";
  contactForm.style.pointerEvents = "none";
  submitButton.disabled = true;
  submitButton.textContent = "Formulaire temporairement indisponible";

  // Afficher le message
  showMessage(message, "warning");
}

function showMessage(message, type) {
  // Supprimer les messages existants
  const existingMessage = document.querySelector(".form-message");
  if (existingMessage) {
    existingMessage.remove();
  }

  // Créer le nouveau message
  const messageDiv = document.createElement("div");
  messageDiv.className = `form-message form-message--${type}`;
  messageDiv.textContent = message;

  // Ajouter le message après le formulaire
  const contactForm = document.getElementById("contact-form");
  contactForm.parentNode.insertBefore(messageDiv, contactForm.nextSibling);

  // Supprimer le message après 5 secondes (sauf pour les warnings)
  if (type !== "warning") {
    setTimeout(() => {
      if (messageDiv.parentNode) {
        messageDiv.remove();
      }
    }, 5000);
  }
}
