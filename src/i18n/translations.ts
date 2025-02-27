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
    experience: {
      en: "Experience",
      es: "Experiencia",
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
  hero: {
    title: {
      es: "Peterson Sena",
      en: "Peterson Sena",
    },
    subtitle: {
      es: "Desarrollador",
      en: "Developer",
    },
    buttons: {
      contact: {
        en: "Contact Me",
        es: "Contáctame",
      },
      projects: {
        en: "Projects",
        es: "Proyectos",
      },
    },
  },

  about: {
    title: {
      en: "About Me",
      es: "Sobre Mí",
    },
   
    description: {
      en: "What can I tell you! I am a passionate developer from Dominican Republic, living in Spain. Since I was a child I have been fascinated by technology and programming, and nowadays I enjoy creating web solutions and applications. I'm always learning, exploring new tools and looking to improve in every project. I love taking on challenges and working on innovative ideas.",
      es: "¡Que os cuento! Soy un apasionado desarrollador de República Dominicana, residente en España. Desde pequeño me ha fascinado la tecnología y la programación, y hoy en día disfruto creando soluciones web y aplicaciones. Siempre estoy aprendiendo, explorando nuevas herramientas y buscando mejorar en cada proyecto. Me encanta asumir desafíos y trabajar en ideas innovadoras",
    },
    description2: {
      en: "I focus on blending technology and creativity to develop efficient and functional solutions. My goal is to ensure that every project not only runs smoothly but also delivers an exceptional user experience.",
      
      es: "Me enfoco en combinar tecnología y creatividad para desarrollar soluciones eficientes y funcionales. Mi objetivo es asegurar que cada proyecto no solo funcione sin problemas, sino que también ofrezca una experiencia de usuario excepcional.",
    },
  },

  services: {
    title_services: {
      en: "My Services",
      es: "Mis servicios",
    },

    services_stack: {
      web: {
        title: {
          en: "Web Development",
          es: "Desarrollo Web",
        },
        description: {
          en: "Creating responsive and modern websites using the latest technologies.",
          es: "Creación de sitios web modernos y responsivos.",
        },
      },
      mobile: {
        title: {
          en: "Mobile Development",
          es: "Desarrollo Móvil",
        },
        description: {
          en: "Building mobile applications for Android platforms.",
          es: "Creación de aplicaciones móviles para Android.",
        },
      },
      backend: {
        title: {
          en: "Backend Development",
          es: "Desarrollo Backend",
        },
        description: {
          en: "Building robust and scalable server-side applications.",
          es: "Creación de aplicaciones backend robustas y escalables.",
        },
      },
      design: {
        title: {
          en: "Design",
          es: "Diseño",
        },
        description: {
          en: "Creating visually stunning and user-friendly interfaces.",
          es: "Creación de interfaces de usuario atractivas y intuitivas.",
        },
      },
    },
  },
  projects : {
    title : {
      en: "My Projects",
      es: "Mis Proyectos",
    },
    subtitle: {
      en: "Some of my recent work",
      es: "Algunos de mis trabajos recientes",
    },
  },

  footer :{
    rights: {
      en: "All rights reserved",
      es: "Todos los derechos reservados",
    }
  }
,
  contact: {
    title: {
      en: "Contact Me",
      es: "Contáctame",
    },
    subtitle: {
      en: "Let's work together",
      es: "Trabajemos juntos",
    },
    form: {
      name: {
        en: "Name",
        es: "Nombre",
      },
      email: {
        en: "Email",
        es: "Correo electrónico",
      },
      message: {
        en: "Message",
        es: "Mensaje",
      },
      submit: {
        en: "Send Message",
        es: "Enviar Mensaje",
      },
    },
  },
    

} as const;
