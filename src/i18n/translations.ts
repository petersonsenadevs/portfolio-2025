import Footer from "../components/sections/Footer.astro";

export const translations = {
  navigation: {
    home: {
      en: "Home",
      es: "Inicio",
    },
    about: {
      en: "About",
      es: "Sobre Mí",
    },
    services: {
      en: "Services",
      es: "Servicios",
    },
    projects: {
      en: "Projects",
      es: "Proyectos",
    },
    skills: {
      en: "Skills",
      es: "Habilidades",
    },
    contact: {
      en: "Contact",
      es: "Contacto",
    },
  },

  footer :{
    rights: {
      en: "All rights reserved",
      es: "Todos los derechos reservados",
    }
  }
    

} as const;
