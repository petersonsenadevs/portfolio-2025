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
      en: "I'm from the Dominican Republic and currently live in Barcelona. Since I was a kid, I’ve always been passionate about technology, audiovisuals, and music. I love discovering how things work and finding ways to improve them. A couple of years ago, I decided to shift my professional path and fully dedicate myself to software development, focusing on scalable architecture, microservices, and process optimization",
      es: "Soy de República Dominicana y actualmente resido en Barcelona. Desde pequeño, siempre me ha apasionado la tecnología, los audiovisuales y la música. Me encanta descubrir cómo funcionan las cosas y encontrar maneras de mejorarlas. Hace un par de años, decidí dar un giro a mi vida profesional y dedicarme por completo al desarrollo de software, enfocándome en arquitectura escalable, microservicios y optimización de procesos.",
    },
    description2: {
      en: "I enjoy solving problems, writing clean code, and creating efficient solutions. I’m always eager to learn something new and improve with every project.",
      
      es: "Disfruto resolviendo problemas, escribiendo código limpio y creando soluciones eficientes. Siempre busco aprender algo nuevo y mejorar en cada proyecto.",
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
