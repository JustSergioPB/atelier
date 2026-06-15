// Single source of translations. `en` defines the shape; `es` must match it.
// Read it in components with `getTranslations(Astro.currentLocale)`.
// Language-invariant text (name, tech names, …) comes from ./shared.

import { contact } from "../contact";
import { shared } from "./shared";

export const defaultLang = "es";

// BCP-47 codes for the <html lang> attribute, per locale path.
export const htmlLang = {
  es: "es-ES",
  en: "en-US",
} as const;

export const languages = {
  es: "ES",
  en: "EN",
} as const;

export const ui = {
  en: {
    meta: {
      title: `${shared.name} — Software Engineer`,
      description: `${shared.name} — Software Engineer based in Spain. Seven years of experience solving problems across all layers of development, adapting to whatever each project needs.`,
    },
    // Strings shared across pages (e.g. the "← Back" link).
    common: {
      back: "Back",
    },
    themeBar: {
      location: "Spain",
      themeLabel: "Theme",
      langLabel: "Language",
    },
    header: {
      menu: "Menu",
      close: "Close menu",
    },
    hero: {
      eyebrow: ["Ideate", "Build", "Ship"],
      title: [
        { text: "Software built to " },
        { text: "last", mark: true },
      ],
      titleSpan: "Complete development, without cutting corners.",
      byline: "Remote from Spain",
      ctaPrimary: "Get in touch",
      ctaSecondary: "LinkedIn",
    },
    about: {
      label: "About me",
      title: "From the database to the screen",
      lead: [
        { text: "I handle software " },
        { text: "at every layer", mark: true },
        {
          text: " — from modeling the data and background services to polishing the user interface, applying the same engineering standards to every step.",
        },
      ],
      stats: [
        { value: "6+", label: "Years engineering" },
        { value: "Full-stack", label: "Front, back & mobile" },
        { value: "8+", label: "Production projects" },
      ],
    },
    experience: {
      label: "Experience",
      title: "Projects I've worked on",
      viewProject: "Visit site",
      seeAll: "See all projects",
      pageMeta: {
        title: `Projects — ${shared.name}`,
        description:
          "Professional projects I've shipped — from real-time IoT platforms to ERP systems, SaaS apps, and client marketing sites.",
      },
      items: [
        {
          meta: ["Vrandalismo", "Creative Studio", "Freelance"],
          title: "Landing page for a creative brand studio",
          desc: "Built the marketing site for Vrandalismo, a creative studio, with Astro for fast static delivery and Tailwind for a tightly controlled design system. Wired up Sanity CMS so the team can edit services and case studies on their own, no developer in the loop.",
          tags: [shared.tech.astro, shared.tech.tailwind, shared.tech.sanity],
          link: "https://vrandalismo.es/",
        },
        {
          meta: ["DEHN", "IoT Platform", "Current"],
          title: "Real-time IoT dashboards for lightning protection",
          desc: "Lead frontend and backend contributor on real-time IoT dashboards and a windmill lightning-detection system, built with Vue 3 and NestJS.",
          tags: [shared.tech.vue, shared.tech.nestjs, "Real-time IoT"],
        },
        {
          meta: ["DEHN", "Hardware Emulation"],
          title: "Virtual device for hardware emulation",
          desc: "Built a virtual device with FastAPI and Vue to emulate proprietary hardware, letting the team verify end-to-end connectivity with ThingsBoard without the physical device.",
          tags: [shared.tech.fastapi, shared.tech.vue, shared.tech.thingsboard],
        },
        {
          meta: ["Essentialist", "Luxury Travel"],
          title: "Backoffice and client apps for luxury travel",
          desc: "Worked within the team on the backoffice for travel-itinerary management on Angular (14–18) and contributed to the premium customer-facing app for the luxury travel sector. Took part in architectural decisions for scalability and helped run error monitoring with Sentry — triage, fix prioritization, and resolution tracking across releases.",
          tags: [shared.tech.angular, shared.tech.sentry, "Architecture"],
        },
        {
          meta: ["Evalua", "Insurance SaaS"],
          title: "Angular SaaS platform for corporate insurance",
          desc: "Contributed to building and maintaining an Angular SaaS platform for corporate insurance management, helping establish the CSS architecture alongside the team.",
          tags: [shared.tech.angular, "CSS Architecture"],
        },
        {
          meta: ["Evalua", "Insurance PWA"],
          title: "Client PWA for insurance claims",
          desc: "Shipped features for a client-side Progressive Web App that let policyholders manage their insurance and file claims directly.",
          tags: [shared.tech.angular, shared.tech.pwa],
        },
        {
          meta: ["Bosonit", "Internal ERP-CRM"],
          title: "ERP-CRM overhaul and design system implementation",
          desc: "Refactored and developed the company's internal platform using Angular. Customized Angular Material to build a proprietary component library, unifying the UI and speeding up future feature delivery.",
          tags: [shared.tech.angular, shared.tech.angularMaterial, "Design System"],
        },
        {
          meta: ["Ginzo Technologies", "Custom ERP"],
          title: "Bespoke management software development",
          desc: "Contributed to a custom ERP for a client company, building frontend components and responsive interfaces with Angular and the Fuse template alongside the development team.",
          tags: [shared.tech.angular, shared.tech.fuse, "Responsive Layouts"],
        },
      ],
    },
    projects: {
      label: "Side Projects",
      title: "What I build outside of work",
      viewProject: "View project",
      comingSoon: "Coming soon",
      items: [
        {
          year: "2026",
          title: "Itzel",
          desc: "A script that pulls the audio track out of videos and transcribes it through OpenAI's API. Built in JavaScript as a focused tool for turning raw footage into searchable text.",
          tags: [shared.tech.javascript, shared.tech.openai],
          chipLabel: "Script",
          image: "/itzel-logo.png",
          imageAlt: "Itzel — audio extraction and transcription",
        },
        {
          year: "2026",
          title: "Spark",
          desc: "An ecosystem for signing and verifying W3C Verifiable Credentials 2.0, made of a backend service and a companion mobile app that work together to issue and validate credentials.",
          tags: [shared.tech.verifiableCredentials, shared.tech.mobile],
          chipLabel: "Ecosystem",
          image: "/spark-logo.png",
          imageAlt: "Spark — verifiable credentials ecosystem",
        },
        {
          year: "2026",
          title: "Ciela",
          desc: "A SaaS for couples planning their wedding: generate digital invitations, track guest attendance, and keep the budget under control, all from one place.",
          tags: [shared.tech.saas],
          chipLabel: "SaaS",
          image: "/ciela-logo.png",
          imageAlt: "Ciela — wedding planning SaaS",
        },
      ],
    },
    approach: {
      label: "Approach",
      title: "How I view development",
      items: [
        {
          title: "The problem drives the tool",
          desc: "I choose technology based on project requirements, not personal hype. Languages and frameworks are tools: I adapt to whatever is needed to be productive from day one.",
        },
        {
          title: "Code you can prove",
          desc: "Tests and CI aren't an afterthought for the end of the project; they are my safety net to iterate fast and without fear. If breaking things in production has a real cost, testing is mandatory.",
        },
        {
          title: "Write for the next maintainer",
          desc: "I optimize code so the team inheriting it can understand it seamlessly, not to feel like the smartest developer in the room today. Clear contracts, clean architecture, and straightforward decisions.",
        },
      ],
    },
    ai: {
      label: "Working with AI",
      title: "Architecture and reliable integration of AI",
      lead: [
        { text: "AI changes how fast we write code, not the responsibility to do it " },
        { text: "right", mark: true },
        {
          text: ". The real value isn't in knowing how to write a prompt — it's in the software architecture that allows a model to interact with a complex codebase safely and predictably.",
        },
      ],
      items: [
        {
          term: shared.aiTerms.skills,
          desc: "I package business logic and workflows into reusable skills. This ensures AI agents follow standardized processes instead of improvising on every run.",
        },
        {
          term: shared.aiTerms.harnesses,
          desc: "I design the runtime environment and boundaries around the model — including custom tools, validation layers, and sandboxing — to guarantee predictable, production-ready outputs, moving past toy demos.",
        },
        {
          term: "Structured context",
          desc: "I write code and documentation optimized for LLM comprehension: strict typing, explicit contracts, and semantic architecture. Conveniently, what makes life easier for the model also makes it easier for your developers.",
        },
      ],
    },
    contact: {
      label: "Contact",
      title: "Let's shape your project",
      lead: "Whether you need help grounding a new idea from scratch or are looking for an engineer to integrate into your team and add value from day one, I’m open to discussing your proposal.",
      emailCta: "Send an email",
      linkedinCta: "View my LinkedIn",
      note: "Remote from Spain",
    },
    footer: {
      role: "Software Engineer",
      cookies: "Cookies",
      cookieSettings: "Settings",
      rights: "All rights reserved.",
    },
    notFound: {
      meta: {
        title: `Page not found — ${shared.name}`,
        description: "This page doesn't exist. Head back to the homepage.",
      },
      label: "Error 404",
      title: [
        { text: "This page got " },
        { text: "lost", mark: true },
      ],
      lead: "The page you're looking for doesn't exist, moved, or never did. Nothing to see here.",
      home: "Back to home",
    },
    cookieBanner: {
      ariaLabel: "Cookie notice",
      message:
        "This website only uses strictly necessary local storage to remember your theme preference. No tracking, no analytics, and no advertising.",
      policyLink: "Cookie Policy",
      accept: "Accept",
      reject: "Reject",
    },
    cookies: {
      meta: {
        title: `Cookie Policy — ${shared.name}`,
        description:
          "Strictly necessary technical cookies and local storage only. No user tracking.",
      },
      label: "Legal",
      title: "Cookie Policy",
      updated: "Last updated: June 2026",
      manage: "Configure preferences",
      intro: [
        "This policy outlines cookie usage on this site. It’s very short because, frankly, I keep data storage to the absolute minimum.",
      ],
      sections: [
        {
          title: "What we store and where",
          body: [
            "We don't use traditional server-side cookies. We only save two variables locally in your own browser to make sure the site works as expected, without sending data anywhere else:",
          ],
          items: [
            "theme — Stores your visual preference (light, dark, or system).",
            "cookie-consent — Remembers if you've dismissed this banner so we don't bug you again.",
          ],
        },
        {
          title: "What we DO NOT do",
          body: [
            "There are no Google Analytics scripts, no Meta pixels, and no marketing or tracking cookies here. I respect your privacy as much as my own. Even the site language is read directly from the URL.",
          ],
        },
        {
          title: "External services",
          body: [
            "Site fonts are loaded via Google Fonts. In doing so, Google may see your IP address to deliver the font files, but we do not install any third-party cookies during this process.",
          ],
        },
        {
          title: "How to delete this data",
          body: [
            "You can clear your local storage at any time through your browser's privacy settings. The only thing that will happen is that the site will prompt you with the technical cookie notice and reset to the default theme on your next visit.",
          ],
        },
        {
          title: "Contact",
          body: [
            `If you have any questions about how this site is managed, feel free to reach out directly at ${contact.email}.`,
          ],
        },
      ],
    },
  },
  es: {
    meta: {
      title: `${shared.name} — Ingeniero de software`,
      description: `${shared.name} — Ingeniero de software en España. Siete años resolviendo problemas en todas las capas del código y adaptándome a lo que necesita cada proyecto.`,
    },
    // Strings shared across pages (e.g. the "← Back" link).
    common: {
      back: "Volver",
    },
    themeBar: {
      location: "España",
      themeLabel: "Color",
      langLabel: "Idioma",
    },
    header: {
      menu: "Menú",
      close: "Cerrar menú",
    },
    hero: {
      eyebrow: ["Idear", "Construir", "Desplegar"],
      title: [
        { text: "Software pensado para " },
        { text: "durar", mark: true },
      ],
      titleSpan: "Desarrollo completo, sin dejar cabos sueltos.",
      byline: "Remoto desde España",
      ctaPrimary: "Hablemos",
      ctaSecondary: "LinkedIn",
    },
    about: {
      label: "Sobre mí",
      title: "De la base de datos a la pantalla",
      lead: [
        { text: "Me encargo del software " },
        { text: "en todas sus capas", mark: true },
        {
          text: ": desde modelar los datos y servicios de fondo hasta pulir la interfaz que ve el usuario, aplicando el mismo nivel de exigencia en cada paso.",
        },
      ],
      stats: [
        { value: "6+", label: "Años de ingeniería" },
        { value: "Full-stack", label: "Front, back y móvil" },
        { value: "8+", label: "Proyectos en producción" },
      ],
    },
    experience: {
      label: "Experiencia",
      title: "Proyectos en los que he trabajado",
      viewProject: "Visitar web",
      seeAll: "Ver todos los proyectos",
      pageMeta: {
        title: `Proyectos — ${shared.name}`,
        description:
          "Proyectos profesionales que he sacado adelante: desde plataformas IoT en tiempo real hasta sistemas ERP, apps SaaS y webs de marketing para clientes.",
      },
      items: [
        {
          meta: ["Vrandalismo", "Estudio creativo", "Freelance"],
          title: "Landing page para un estudio creativo de marca",
          desc: "Desarrollé la web de Vrandalismo, un estudio creativo, con Astro para una entrega estática rápida y Tailwind para un sistema de diseño bien controlado. Integré Sanity CMS para que el equipo edite servicios y casos de estudio por su cuenta, sin depender de un desarrollador.",
          tags: [shared.tech.astro, shared.tech.tailwind, shared.tech.sanity],
          link: "https://vrandalismo.es/",
        },
        {
          meta: ["DEHN", "Plataforma IoT", "Actual"],
          title: "Dashboards IoT en tiempo real para protección contra rayos",
          desc: "Contribuidor principal de frontend y backend en dashboards IoT en tiempo real y un sistema de detección de rayos para aerogeneradores, con Vue 3 y NestJS.",
          tags: [shared.tech.vue, shared.tech.nestjs, "IoT en tiempo real"],
        },
        {
          meta: ["DEHN", "Emulación de hardware"],
          title: "Dispositivo virtual para emulación de hardware",
          desc: "Construí un dispositivo virtual con FastAPI y Vue para emular hardware propietario, permitiendo al equipo verificar la conectividad de extremo a extremo con ThingsBoard sin el dispositivo físico.",
          tags: [shared.tech.fastapi, shared.tech.vue, shared.tech.thingsboard],
        },
        {
          meta: ["Essentialist", "Viajes de lujo"],
          title: "Backoffice y apps de cliente para viajes de lujo",
          desc: "Trabajé dentro del equipo en el backoffice de gestión de itinerarios de viaje en Angular (14–18) y contribuí a la app premium de cara al cliente del sector de viajes de lujo. Participé en decisiones de arquitectura para la escalabilidad y ayudé en la monitorización de errores con Sentry: triaje, priorización de correcciones y seguimiento de resoluciones entre releases.",
          tags: [shared.tech.angular, shared.tech.sentry, "Arquitectura"],
        },
        {
          meta: ["Evalua", "SaaS de seguros"],
          title: "Plataforma SaaS en Angular para seguros corporativos",
          desc: "Contribuí al desarrollo y mantenimiento de una plataforma SaaS en Angular para la gestión de seguros corporativos, ayudando a establecer la arquitectura CSS junto al equipo.",
          tags: [shared.tech.angular, "Arquitectura CSS"],
        },
        {
          meta: ["Evalua", "PWA de seguros"],
          title: "PWA de cliente para gestión de siniestros",
          desc: "Desarrollé funcionalidades para una Progressive Web App del lado del cliente que permitía a los asegurados gestionar su seguro y declarar siniestros directamente.",
          tags: [shared.tech.angular, shared.tech.pwa],
        },
        {
          meta: ["Bosonit", "ERP-CRM Interno"],
          title: "Reconstrucción de ERP y creación de sistema de diseño",
          desc: "Refactoricé y desarrollé la plataforma interna de la empresa con Angular. Personalicé Angular Material para crear un sistema de componentes propio, unificando la interfaz y acelerando los futuros desarrollos.",
          tags: [shared.tech.angular, shared.tech.angularMaterial, "Sistema de diseño"],
        },
        {
          meta: ["Ginzo Technologies", "ERP a medida"],
          title: "Desarrollo de software de gestión personalizado",
          desc: "Contribuí a un ERP a medida para una empresa cliente, desarrollando componentes de frontend e interfaces responsive con Angular y la plantilla Fuse junto al equipo de desarrollo.",
          tags: [shared.tech.angular, shared.tech.fuse, "Layouts responsive"],
        },
      ],
    },
    projects: {
      label: "Proyectos personales",
      title: "Lo que construyo fuera del trabajo",
      viewProject: "Ver proyecto",
      comingSoon: "Próximamente",
      items: [
        {
          year: "2026",
          title: "Itzel",
          desc: "Un script que extrae la pista de audio de vídeos y la transcribe a través de la API de OpenAI. Escrito en JavaScript como una herramienta enfocada en convertir grabaciones en texto que se puede buscar.",
          tags: [shared.tech.javascript, shared.tech.openai],
          chipLabel: "Script",
          image: "/itzel-logo.png",
          imageAlt: "Itzel — extracción de audio y transcripción",
        },
        {
          year: "2026",
          title: "Spark",
          desc: "Un ecosistema para firmar y verificar W3C Verifiable Credentials 2.0, formado por un servicio backend y una app móvil que trabajan juntos para emitir y validar credenciales.",
          tags: [shared.tech.verifiableCredentials, shared.tech.mobile],
          chipLabel: "Ecosistema",
          image: "/spark-logo.png",
          imageAlt: "Spark — ecosistema de credenciales verificables",
        },
        {
          year: "2026",
          title: "Ciela",
          desc: "Un SaaS para parejas que organizan su boda: genera invitaciones digitales, controla la asistencia de los invitados y gestiona el presupuesto, todo desde un mismo sitio.",
          tags: [shared.tech.saas],
          chipLabel: "SaaS",
          image: "/ciela-logo.png",
          imageAlt: "Ciela — SaaS para organizar bodas",
        },
      ],
    },
    approach: {
      label: "Enfoque",
      title: "Cómo veo el desarrollo",
      items: [
        {
          title: "El problema manda, la herramienta obedece",
          desc: "Elijo la tecnología en función del proyecto, no por capricho. Los lenguajes y frameworks son herramientas: me adapto a lo que haga falta para ser productivo desde el primer día.",
        },
        {
          title: "Código que se puede demostrar",
          desc: "Los tests y la CI no son un extra para el final; son mi red de seguridad para iterar rápido y sin miedo. Si romper algo en producción cuesta dinero real, probar el código es obligatorio.",
        },
        {
          title: "Pensar en el siguiente que vendrá",
          desc: "Escribo código optimizado para que lo entienda el equipo que lo herede, no para creerme el más listo hoy. Contratos claros, arquitectura limpia y decisiones fáciles de seguir en el futuro.",
        },
      ],
    },
    ai: {
      label: "Trabajar con IA",
      title: "Arquitectura e integración fiable de IA",
      lead: [
        { text: "La IA cambia la velocidad con la que picamos código, no la obligación de hacerlo " },
        { text: "bien", mark: true },
        {
          text: ". El valor real no está en saber escribir un prompt, sino en la arquitectura de ingeniería que permite a un modelo interactuar con una base de código compleja de forma segura.",
        },
      ],
      items: [
        {
          term: shared.aiTerms.skills,
          desc: "Empaqueto la lógica de negocio y los flujos de trabajo en habilidades (skills) reutilizables. Así, los agentes de IA siguen procesos estandarizados en lugar de improvisar en cada ejecución.",
        },
        {
          term: shared.aiTerms.harnesses,
          desc: "Diseño el entorno y los límites lógicos del modelo (herramientas, validaciones y sandboxing) para garantizar respuestas predecibles, verificables y listas para producción, huyendo de las típicas demos de juguete.",
        },
        {
          term: "Contexto estructurado",
          desc: "Escribo código y documentación preparados para que una IA los entienda a la primera: tipado estricto, contratos explícitos y arquitectura semántica. Curiosamente, lo que le facilita la vida al modelo también se la facilita a tus desarrolladores.",
        },
      ],
    },
    contact: {
      label: "Contacto",
      title: "Impulsemos tu proyecto",
      lead: "Ya sea para incorporarme a tu equipo a tiempo parcial/completo o para colaborar en un proyecto técnico concreto, me interesa escuchar tu propuesta.",
      emailCta: "Enviar un correo",
      linkedinCta: "Ver mi LinkedIn",
      note: "Remoto desde España",
    },
    footer: {
      role: "Ingeniero de software",
      cookies: "Cookies",
      cookieSettings: "Configuración",
      rights: "Todos los derechos reservados.",
    },
    notFound: {
      meta: {
        title: `Página no encontrada — ${shared.name}`,
        description: "Esta página no existe. Vuelve a la página de inicio.",
      },
      label: "Error 404",
      title: [
        { text: "Esta página se ha " },
        { text: "perdido", mark: true },
      ],
      lead: "La página que buscas no existe, se movió o nunca estuvo aquí. No hay nada que ver.",
      home: "Volver al inicio",
    },
    cookieBanner: {
      ariaLabel: "Aviso de cookies",
      message:
        "Este sitio web solo usa almacenamiento local estrictamente necesario para recordar tu tema visual. Sin rastreo, sin analíticas y sin publicidad.",
      policyLink: "Política de cookies",
      accept: "Aceptar",
      reject: "Rechazar",
    },
    cookies: {
      meta: {
        title: `Política de cookies — ${shared.name}`,
        description:
          "Solo cookies técnicas y almacenamiento local estrictamente necesario para el funcionamiento de la web. Sin rastreo.",
      },
      label: "Legal",
      title: "Política de cookies",
      updated: "Última actualización: junio de 2026",
      manage: "Configurar preferencias",
      intro: [
        "Esta política detalla el uso de cookies en la web. Es muy corta porque, sinceramente, guardo lo mínimo imprescindible.",
      ],
      sections: [
        {
          title: "Qué guardamos y dónde",
          body: [
            "No usamos cookies tradicionales en servidor. Solo guardamos dos variables de forma local en tu propio navegador para que la web funcione como esperas, sin enviar datos a ninguna parte:",
          ],
          items: [
            "theme — Guarda tu preferencia visual (claro, oscuro o sistema).",
            "cookie-consent — Recuerda si ya has cerrado este banner para no molestarte más.",
          ],
        },
        {
          title: "Lo que NO hacemos",
          body: [
            "Aquí no hay scripts de Google Analytics, ni píxeles de Meta, ni cookies de publicidad o rastreo. Respeto tu privacidad tanto como la mía. Incluso el idioma de la web se lee directamente desde la URL.",
          ],
        },
        {
          title: "Servicios externos",
          body: [
            "La tipografía de la web se carga desde Google Fonts. Al hacerlo, Google puede ver tu dirección IP para enviar los archivos de la fuente, pero nosotros no instalamos ninguna cookie de terceros en ese proceso.",
          ],
        },
        {
          title: "Cómo eliminar estos datos",
          body: [
            "Puedes borrar el almacenamiento local cuando quieras desde los ajustes de privacidad de tu navegador. Lo único que pasará es que la web volverá a mostrarte el aviso técnico de cookies y el tema visual por defecto.",
          ],
        },
        {
          title: "Contacto",
          body: [
            `Si tienes cualquier duda sobre cómo se gestiona esta web, puedes escribirme directamente a ${contact.email}.`,
          ],
        },
      ],
    },
  }
} as const;

export type Lang = keyof typeof ui;

// Map every accepted spelling (path + BCP-47 codes) back to a locale path.
// `Astro.currentLocale` can return a code (e.g. "en-US") rather than the path.
const localeAliases: Record<string, Lang> = {
  es: "es",
  "es-ES": "es",
  en: "en",
  "en-US": "en",
};

export function isLang(value: string | undefined): value is Lang {
  return !!value && value in ui;
}

export function resolveLang(value: string | undefined): Lang {
  return (value && localeAliases[value]) || defaultLang;
}

// Resolve the current locale (defaults to `es`) and return its dictionary.
export function getTranslations(locale: string | undefined) {
  return ui[resolveLang(locale)];
}
