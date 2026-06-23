export const es = {
  nav: {
    about: "Acerca de",
    skills: "Habilidades",
    experience: "Experiencia",
    projects: "Proyectos",
    contact: "Contacto",
    menu: "Menú",
    copied: "¡Copiado!",
  },
  hero: {
    name: "Miguel Guarrochena",
    role: "Desarrollador Frontend & Producto",
    label: "Disponible para proyectos",
    tagline:
      "Diseño y construyo productos digitales que resuelven problemas reales — con código limpio, criterio de producto y atención al detalle.",
  },
  about: {
    title: "Acerca de mí",
    label: "01 — Perfil",
    sideLabel: "Frontend · Producto · Detalle",
    description: `Combino desarrollo frontend con pensamiento de producto. No me limito a implementar pantallas: entiendo el problema, propongo soluciones y construyo experiencias que tienen sentido para el usuario y el negocio.

Trabajo con React, Next.js y TypeScript, pero mi foco va más allá del stack — priorizo claridad, rendimiento y decisiones que escalen. Me gusta colaborar de cerca con diseño y producto, traducir ideas en interfaces cuidadas y encontrar el camino más simple para resolver algo complejo.`,
  },
  skills: {
    title: "Habilidades",
    label: "02 — Capacidades",
    technical: "Stack técnico",
    soft: "Enfoque de trabajo",
    softSkills: [
      {
        name: "Pensamiento de producto",
        description:
          "Entiendo el problema antes de escribir código. Priorizo impacto, no solo entregables.",
      },
      {
        name: "Resolución de problemas",
        description:
          "Descompongo lo complejo, evalúo alternativas y elijo la solución más simple que funcione.",
      },
      {
        name: "Colaboración",
        description:
          "Trabajo fluido con diseño, backend y stakeholders para alinear visión y ejecución.",
      },
      {
        name: "Autonomía",
        description:
          "Investigo, aprendo y avanzo sin depender de instrucciones paso a paso.",
      },
      {
        name: "Criterio estético",
        description:
          "Cuido tipografía, espaciado y microinteracciones — el detalle importa.",
      },
      {
        name: "Gestión del tiempo",
        description:
          "Organizo tareas por impacto y entrego resultados dentro de los plazos acordados.",
      },
    ],
  },
  experience: {
    title: "Experiencia",
    label: "03 — Trayectoria",
    present: "Presente",
    freelance: {
      company: "Freelance",
      role: "Desarrollador Front End Mid-level",
      period: "Noviembre 2025 - Presente",
      description:
        "Entrego soluciones front-end de alta calidad para diversos clientes, equilibrando código limpio y experiencia de usuario. Me enfoco en mejorar los tiempos de carga, accesibilidad y mantenibilidad mediante el uso inteligente de frameworks y optimización de rendimiento. Aplico un enfoque basado en datos y habilidades de resolución de problemas para optimizar tanto la experiencia del usuario como las operaciones internas. Desarrollo y mantengo interfaces de usuario para plataformas web y móviles utilizando frameworks modernos.",
    },
    bellolandiaNew: {
      company: "Bellolandia Estudio",
      role: "Colaboración Técnica y de Pipeline",
      period: "Noviembre 2025 - Presente",
      description:
        "Colaboro con equipos de producción de animación para mejorar herramientas internas y automatizar flujos de trabajo. Construyo e integro herramientas para optimizar los pipelines de producción, mejorando la eficiencia y reduciendo tareas manuales. Gestiono flujos de trabajo de software, control de versiones y procesos de implementación para garantizar una ejecución fluida de los proyectos.",
    },
    mechanized: {
      company: "Mechanized",
      role: "Desarrollador Front End Mid-level",
      period: "Diciembre 2022 - Noviembre 2025",
      description:
        "Desarrollo y mantenimiento de interfaces web y móviles responsivas de alto rendimiento utilizando React, Next.js, TypeScript y frameworks CSS modernos. Colaboré con equipos multifuncionales para entregar características escalables, optimizar el rendimiento a través de code splitting y caching, y desarrollar compatibilidad entre navegadores. Contribuí a mejorar los flujos de trabajo de desarrollo implementando componentes reutilizables, mejores prácticas de control de versiones y metodologías ágiles.",
    },
    solehann: {
      company: "Selehann",
      role: "Desarrollador Front End Junior",
      period: "Abril 2022 - Diciembre 2022",
      description:
        "Trabajé en la construcción y mantenimiento de interfaces de usuario con React y TypeScript, enfocándome en diseño responsivo y accesible. Apoyo la migración de código legacy a frameworks modernos, colaborando en testing y corrección de bugs y contribuyendo al desarrollo de herramientas internas para optimizar flujos de trabajo. Obtuve experiencia práctica con metodologías ágiles y herramientas de gestión de proyectos como Jira y GitHub Projects.",
    },
    bellolandia: {
      company: "Bellolandia",
      role: "Gerente de Proyecto",
      period: "Enero 2021 - Abril 2022",
      description:
        "Lideré la gestión de proyectos audiovisuales, coordinando equipos y asegurando la entrega oportuna de producciones creativas.",
    },
    bosonit1: {
      company: "Bosonit (España)",
      role: "Desarrollador Front End Junior",
      period: "Enero 2020 - Octubre 2020",
      description:
        "Asistí en la implementación de diseño web y móvil, contribuyendo al desarrollo de UI y gestión de flujos de trabajo de software.",
    },
    bosonit2: {
      company: "Bosonit (España)",
      role: "Gestión de Datos",
      period: "Agosto 2019 - Enero 2020",
      description:
        "Trabajé en procesos de TI y gestión de datos, apoyando la toma de decisiones basada en datos.",
    },
  },
  projects: {
    title: "Proyectos",
    label: "04 — Trabajo seleccionado",
    viewDemo: "Ver demo",
    viewSite: "Ver sitio",
    items: [
      {
        id: "mlops",
        type: "video",
        context: "Mechanized",
        name: "MLOps Platform",
        description:
          "Plataforma end-to-end de MLOps para entrenar, desplegar y monitorear modelos de IA. Permite a los equipos gestionar el ciclo completo del modelo —dataset, entrenamiento, evaluación y puesta en producción— con flujos de trabajo automatizados y trazabilidad.",
        stack: ["React", "TypeScript", "Next.js"],
        youtubeId: "35cZI82f6WA",
        startSeconds: 825,
        url: "",
      },
      {
        id: "modernize",
        type: "video",
        context: "Mechanized",
        name: "Modernize CardDemo",
        description:
          "Herramienta de modernización de código legacy. Analiza, refactoriza y traduce aplicaciones mainframe/COBOL (sobre el ejemplo de IBM CardDemo) hacia stacks modernos manteniendo la lógica de negocio.",
        stack: ["Next.js", "React", "TypeScript"],
        youtubeId: "Y9_RQciGVn4",
        startSeconds: 240,
        url: "",
      },
      {
        id: "vmshift",
        type: "video",
        context: "Mechanized",
        name: "VMShift",
        description:
          "Solución para mover máquinas virtuales a la plataforma de contenedores o cloud que el cliente elija. Automatiza el descubrimiento del workload, la evaluación de compatibilidad y la migración a AWS.",
        stack: ["Next.js", "React", "TypeScript"],
        youtubeId: "vOvt-jMorQw",
        startSeconds: 200,
        url: "",
      },
      {
        id: "pickly",
        type: "web",
        context: "Freelance",
        name: "Pickly",
        description:
          "Plataforma para crear y compartir encuestas, rankings, ratings, ruletas y torneos 1-vs-1. Sin registro: se comparte el link y se vota en segundos. Disponible como PWA instalable.",
        stack: ["Next.js", "React", "TypeScript", "PWA"],
        youtubeId: "",
        startSeconds: 0,
        url: "https://www.letspickly.com/",
        image: "/projects/pickly.jpg",
      },
      {
        id: "iseo",
        type: "web",
        context: "Freelance",
        name: "ISEO RH",
        description:
          "Sitio institucional de una consultora de Recursos Humanos para PyMEs. Comunica servicios, diagnóstico organizacional y la herramienta online de gestión de personal, con CTAs directos a WhatsApp.",
        stack: ["Next.js", "React", "TypeScript"],
        youtubeId: "",
        startSeconds: 0,
        url: "https://www.iseo-rh.com/",
        image: "/projects/iseo.png",
      },
      {
        id: "meme",
        type: "web",
        context: "Proyecto personal",
        name: "Meme Maker",
        description:
          "Generador de memes en el navegador. Subís una imagen, agregás texto editable y exportás el resultado. Pensado como experimento de manipulación de imagen del lado del cliente.",
        stack: ["React", "Next.js", "TypeScript"],
        youtubeId: "",
        startSeconds: 0,
        url: "https://meme-maker-mg.vercel.app/",
        image: "/projects/meme.jpg",
      },
      {
        id: "bellolandia",
        type: "web",
        context: "Bellolandia",
        name: "Bellolandia",
        description:
          "Sitio web del estudio de animación Bellolandia. Showcase de trabajos del estudio (videojuegos, series, animación) con catálogo de proyectos. Desarrollado en Webflow.",
        stack: ["Webflow"],
        youtubeId: "",
        startSeconds: 0,
        url: "https://bellolandia.com/",
        image: "/projects/bellolandia.png",
      },
      {
        id: "kumo",
        type: "web",
        context: "Freelance",
        name: "Kumo",
        description:
          "App de finanzas personales con gastos, presupuestos, recordatorios y lista de compras. Notificaciones por WhatsApp y escaneo de tickets con IA (OCR).",
        stack: ["Next.js", "TypeScript", "Supabase"],
        youtubeId: "",
        startSeconds: 0,
        url: "https://www.kumo-app.com/",
        image: "/projects/kumo.png",
      },
    ],
  },
  contact: {
    title: "Contacto",
    email: "Correo",
    phone: "Teléfono",
    linkedin: "LinkedIn",
    github: "GitHub",
    copyEmail: "Copiar email al portapapeles",
    emailCopied: "¡Copiado!",
    notificationMessage:
      "Email copiado al portapapeles. ¡Puedes contactarme cuando quieras!",
  },
  cv: {
    title: "Descargar CV",
    download: "Descargar CV",
  },
  settings: {
    language: "Idioma",
  },
  footer: {
    rights: "© {year} Miguel Guarrochena",
    tagline: "Construyendo productos con intención.",
  },
  doodles: {
    clickPhoto: "¡hacé click!",
    current: "mi experiencia",
    pickOne: "mirá estos",
  },
};
