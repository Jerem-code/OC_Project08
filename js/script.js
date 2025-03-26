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
  rootMargin: "0px",
  threshold: 0.5,
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
