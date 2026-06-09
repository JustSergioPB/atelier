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
      sub: "I’ve spent seven years taking projects from database to interface. I build software methodically: readable code, solid test coverage, and architectures designed to be easy to maintain down the road.",
      byline: "Remote from Spain",
      ctaPrimary: "Get in touch",
      ctaSecondary: "LinkedIn",
    },
    about: {
      label: "About me",
      title: "Real engineering, no shortcuts",
      lead: [
        { text: "I handle software " },
        { text: "at every layer", mark: true },
        {
          text: " — from modeling the data and background services to polishing the user interface, applying the same engineering standards to every step.",
        },
      ],
      body: [
        "Over the past seven years as an engineer, I’ve worked on a bit of everything: backend, frontend, and mobile. Over time you learn that tools change, but what really matters stays the same: understanding business constraints, choosing the right technical approach, and building something that actually holds up in production.",
        "I don't chase framework trends. I care about whether a solution is correct, maintainable, and efficient for the actual problem in front of me. Picking up a new technical domain or switching technologies is just part of the job — a means to an end, never the end itself.",
      ],
    },
    experience: {
      label: "Experience",
      title: "Projects I've shipped",
      items: [
        {
          meta: ["Internal ERP-CRM"],
          title: "ERP-CRM overhaul and design system implementation",
          desc: "Refactored and developed the company's internal platform using Angular. Customized Angular Material to build a proprietary component library, unifying the UI and speeding up future feature delivery.",
          tags: [shared.tech.angular, shared.tech.angularMaterial, "Design System"],
        },
        {
          meta: ["Custom ERP", "For Client"],
          title: "Bespoke management software development",
          desc: "Created and maintained a custom ERP system. Designed dynamic, responsive interfaces using Angular and the Fuse template, ensuring optimal performance across all screen sizes.",
          tags: [shared.tech.angular, shared.tech.fuse, "Responsive Layouts"],
        },
      ],
    },
    projects: {
      label: "Side Projects",
      title: "What I build outside of work",
      viewProject: "View project",
      items: [
        {
          meta: ["Side Project", "2026"],
          title: "Project name",
          desc: "What it does and the problem it solves in a couple of lines. Use this space to highlight an architectural choice or a specific technical approach you wanted to explore.",
          tags: [shared.tech.placeholder, shared.tech.placeholder],
          link: "#",
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
      sub: "Drop me an email or connect on LinkedIn. I usually get back to people quickly.",
      emailCta: "Send an email",
      linkedinCta: "View my LinkedIn",
      note: ["Remote from Spain", "Available for project work and full-time contracts."],
    },
    footer: {
      role: "Software Engineer",
      cookies: "Cookies",
      cookieSettings: "Settings",
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
      back: "Back",
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
      sub: "Llevo siete años encargándome de los proyectos desde la base de datos hasta la interfaz. Construyo software de forma metódica: código legible, bien testeado y pensado para que sea fácil de mantener en el futuro.",
      byline: "Remoto desde España",
      ctaPrimary: "Hablemos",
      ctaSecondary: "LinkedIn",
    },
    about: {
      label: "Sobre mí",
      title: "Ingeniería real, sin rodeos",
      lead: [
        { text: "Me encargo del software " },
        { text: "en todas sus capas", mark: true },
        {
          text: ": desde modelar los datos y servicios de fondo hasta pulir la interfaz que ve el usuario, aplicando el mismo nivel de exigencia en cada paso.",
        },
      ],
      body: [
        "En estos siete años como ingeniero he tocado un poco de todo: backend, frontend, infrastructura y móvil. Con el tiempo aprendes que las herramientas cambian, pero lo verdaderamente importante se mantiene: entender las restricciones del negocio, elegir el enfoque técnico adecuado y construir algo que aguante el tipo en producción.",
        "No sigo modas de frameworks. Me importa que la solución sea correcta, mantenible y eficiente para el caso real que tengo delante. Aprender un nuevo dominio técnico o cambiar de tecnología es solo parte del trabajo; el objetivo siempre es aportar valor, no coleccionar logos en el CV.",
      ],
    },
    experience: {
      label: "Experiencia",
      title: "Proyectos que he sacado adelante",
      items: [
        {
          meta: ["ERP-CRM Interno"],
          title: "Reconstrucción de ERP y creación de sistema de diseño",
          desc: "Refactoricé y desarrollé la plataforma interna de la empresa con Angular. Personalicé Angular Material para crear un sistema de componentes propio, unificando la interfaz y acelerando los futuros desarrollos.",
          tags: [shared.tech.angular, shared.tech.angularMaterial, "Sistema de diseño"],
        },
        {
          meta: ["ERP a medida", "Para cliente"],
          title: "Desarrollo de software de gestión personalizado",
          desc: "Creación y mantenimiento de un ERP a medida. Diseñé interfaces dinámicas y responsive utilizando Angular y la plantilla Fuse, asegurando un rendimiento óptimo en cualquier tipo de pantalla.",
          tags: [shared.tech.angular, shared.tech.fuse, "Layouts responsive"],
        },
      ],
    },
    projects: {
      label: "Proyectos personales",
      title: "Lo que construyo fuera del trabajo",
      viewProject: "Ver proyecto",
      items: [
        {
          meta: ["Proyecto personal", "2026"],
          title: "Nombre del proyecto",
          desc: "Qué hace y qué problema resuelve en un par de líneas. Aprovecha para contar esa decisión de arquitectura o enfoque técnico interesante que te apetecía probar.",
          tags: [shared.tech.placeholder, shared.tech.placeholder],
          link: "#",
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
      sub: "Escríbeme por email o conectamos por LinkedIn. Suelo responder rápido.",
      emailCta: "Enviar un correo",
      linkedinCta: "Ver mi LinkedIn",
      note: ["Remoto desde España", "Disponible para proyectos y contratos full-time."],
    },
    footer: {
      role: "Ingeniero de software",
      cookies: "Cookies",
      cookieSettings: "Configuración",
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
      back: "Volver",
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
