// Single source of translations. `en` defines the shape; `es` must match it.
// Read it in components with `getTranslations(Astro.currentLocale)`.
// Language-invariant text (name, tech names, …) comes from ./shared.

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
      description: `${shared.name} — Software Engineer based in Spain. Almost seven years solving problems across the full stack, adapting to whatever each project needs.`,
    },
    themeBar: {
      location: "Spain",
      themeLabel: "Color theme",
      langLabel: "Language",
    },
    hero: {
      eyebrow: ["Ideate", "Build", "Ship"],
      // `mark: true` segments get the highlight color in the component.
      title: [
        { text: "Software you can " },
        { text: "rely", mark: true },
        { text: " on" },
      ],
      titleSpan: "Designed, engineered, and tested end to end.",
      sub: "Almost seven years engineering robust, well-tested systems across the stack — built to keep working long after launch, for the people who'll maintain them.",
      byline: "Based in Spain",
      ctaPrimary: "Start a conversation",
      ctaSecondary: "View LinkedIn",
    },
    about: {
      label: "About",
      title: "The work behind the screen",
      // `mark: true` segments get the accent color in the component.
      lead: [
        { text: "I build software " },
        { text: "end to end", mark: true },
        {
          text: " — from the data and services underneath to the interfaces on top, applying the same engineering rigor at every layer.",
        },
      ],
      body: [
        "For almost seven years I've worked across the full stack as a software engineer — backend, frontend, mobile, and the layers in between. What stays constant isn't the toolset; it's how I approach a problem: understand the real constraints, choose the right approach, and build something that holds up in production.",
        "I care less about which framework is in fashion than about whether a solution is correct, maintainable, and a genuine fit for the problem in front of me. Picking up a new domain or a new way of working is part of the job — the means to an end, never the end itself.",
      ],
    },
    experience: {
      label: "Experience",
      title: "Things I've shipped",
      items: [
        {
          meta: ["ERP-CRM Platform", "Internal"],
          title: "Internal ERP-CRM, rebuilt on a custom design system",
          desc: "Refactored and developed an internal ERP-CRM solution in Angular, customising Angular Material to implement the company's own design system on top of the framework's defaults.",
          tags: [shared.tech.angular, shared.tech.angularMaterial, "Design System"],
        },
        {
          meta: ["Client ERP Software"],
          title: "Custom ERP for a client company",
          desc: "Developed and maintained bespoke ERP software for a client, building frontend components and responsive interfaces with Angular and the Fuse template.",
          tags: [shared.tech.angular, shared.tech.fuse, "Responsive UI"],
        },
      ],
    },
    projects: {
      label: "Side Projects",
      title: "Experiments & side projects",
      viewProject: "View project",
      items: [
        {
          meta: ["Side Project", "Year"],
          title: "Project name",
          desc: "One or two sentences: what it does, the problem it solves, and the interesting engineering decision behind it. Side projects are where you get to show range, so lead with what makes this one yours.",
          tags: [shared.tech.placeholder, shared.tech.placeholder],
          link: "#",
        },
      ],
    },
    approach: {
      label: "Approach",
      title: "How I think about software",
      items: [
        {
          num: "P.01",
          title: "Problems first, tools second",
          desc: "I pick technology to fit the problem and its constraints, not the other way around. Languages and frameworks are means to an end — I learn what a project needs and stay productive across the stack.",
        },
        {
          num: "P.02",
          title: "Correctness you can prove",
          desc: "Tests and CI aren't an afterthought, they're how I move fast without breaking things. When the cost of failure is real, the safety net is part of the design — not bolted on later.",
        },
        {
          num: "P.03",
          title: "Code that outlives me",
          desc: "I optimize for the team that inherits the system, not the cleverest line I could write today. Clear contracts, readable structure, and decisions a future maintainer can follow.",
        },
      ],
    },
    ai: {
      label: "Working with AI",
      title: "Setting AI up to do real work",
      lead: [
        { text: "AI changes how software gets built, not whether it needs to be built " },
        { text: "well", mark: true },
        {
          text: ". Most of the value isn't in the prompt — it's in the engineering that lets a model work reliably on a real codebase.",
        },
      ],
      items: [
        {
          term: shared.aiTerms.skills,
          desc: "I package domain knowledge and repeatable procedures into skills, so an AI agent follows the proven path instead of improvising. The expertise lives in version control, not in one person's head or a throwaway chat.",
        },
        {
          term: shared.aiTerms.harnesses,
          desc: "I build the scaffolding around the model — the tools, guardrails, and checks it runs inside — so it produces correct, verifiable output and does dependable work rather than one-off demos.",
        },
        {
          term: "Documented context",
          desc: "I write code and documentation that hand an AI the context it needs to reason correctly: clear structure, explicit contracts, and the why behind decisions. The same clarity that helps a model helps the humans who maintain it.",
        },
      ],
    },
    contact: {
      label: "Contact",
      title: "Let's work together",
      lead: "Whether you're hiring for a role or have a project that needs an engineer, I'm open to both.",
      sub: "The quickest way to reach me is email or LinkedIn — whichever you prefer.",
      emailCta: "Email me",
      linkedinCta: "Connect on LinkedIn",
      note: ["Based in Spain", "Open to full-time roles and project work."],
    },
    footer: {
      role: "Software Engineer",
    },
  },

  es: {
    meta: {
      title: `${shared.name} — Ingeniero de software`,
      description: `${shared.name} — Ingeniero de software desde España. Casi siete años resolviendo problemas en todo el stack, adaptándome a lo que necesita cada proyecto.`,
    },
    themeBar: {
      location: "España",
      themeLabel: "Tema de color",
      langLabel: "Idioma",
    },
    hero: {
      eyebrow: ["Idear", "Construir", "Entregar"],
      title: [
        { text: "Software en el que puedes " },
        { text: "confiar", mark: true },
      ],
      titleSpan: "Diseñado, desarrollado y probado de principio a fin.",
      sub: "Casi siete años desarrollando sistemas robustos y bien probados en todo el stack, hechos para seguir funcionando mucho después del lanzamiento, para quienes los mantendrán.",
      byline: "Desde España",
      ctaPrimary: "Empecemos a hablar",
      ctaSecondary: "Ver LinkedIn",
    },
    about: {
      label: "Sobre mí",
      title: "El trabajo detrás de la pantalla",
      lead: [
        { text: "Construyo software " },
        { text: "de principio a fin", mark: true },
        {
          text: ", desde los datos y servicios de la base hasta las interfaces de arriba, aplicando el mismo rigor de ingeniería en cada capa.",
        },
      ],
      body: [
        "Durante casi siete años he trabajado en todo el stack como ingeniero de software: backend, frontend, móvil y las capas intermedias. Lo que no cambia no son las herramientas, sino cómo afronto un problema: entender las restricciones reales, elegir el enfoque adecuado y construir algo que aguante en producción.",
        "Me importa menos qué framework está de moda que si una solución es correcta, mantenible y encaja de verdad con el problema que tengo delante. Aprender un dominio nuevo o una forma nueva de trabajar es parte del trabajo: un medio para un fin, nunca el fin en sí.",
      ],
    },
    experience: {
      label: "Experiencia",
      title: "Lo que he entregado",
      items: [
        {
          meta: ["Plataforma ERP-CRM", "Interna"],
          title: "ERP-CRM interno, reconstruido sobre un sistema de diseño propio",
          desc: "Refactoricé y desarrollé una solución ERP-CRM interna en Angular, personalizando Angular Material para implementar el sistema de diseño propio de la empresa sobre los valores por defecto del framework.",
          tags: [shared.tech.angular, shared.tech.angularMaterial, "Sistema de diseño"],
        },
        {
          meta: ["Software ERP para cliente"],
          title: "ERP a medida para una empresa cliente",
          desc: "Desarrollé y mantuve software ERP a medida para un cliente, creando componentes frontend e interfaces responsive con Angular y la plantilla Fuse.",
          tags: [shared.tech.angular, shared.tech.fuse, "Interfaz responsive"],
        },
      ],
    },
    projects: {
      label: "Proyectos personales",
      title: "Experimentos y proyectos personales",
      viewProject: "Ver proyecto",
      items: [
        {
          meta: ["Proyecto personal", "Año"],
          title: "Nombre del proyecto",
          desc: "Una o dos frases: qué hace, qué problema resuelve y la decisión de ingeniería interesante que hay detrás. Los proyectos personales son donde muestras tu rango, así que empieza por lo que hace que este sea tuyo.",
          tags: [shared.tech.placeholder, shared.tech.placeholder],
          link: "#",
        },
      ],
    },
    approach: {
      label: "Enfoque",
      title: "Cómo pienso el software",
      items: [
        {
          num: "P.01",
          title: "Primero los problemas, después las herramientas",
          desc: "Elijo la tecnología para que encaje con el problema y sus restricciones, no al revés. Los lenguajes y frameworks son un medio para un fin: aprendo lo que necesita cada proyecto y me mantengo productivo en todo el stack.",
        },
        {
          num: "P.02",
          title: "Correcto y demostrable",
          desc: "Los tests y la CI no son un añadido, son cómo avanzo rápido sin romper cosas. Cuando el coste de fallar es real, la red de seguridad es parte del diseño, no algo que se pega después.",
        },
        {
          num: "P.03",
          title: "Código que me sobrevive",
          desc: "Optimizo para el equipo que hereda el sistema, no para la línea más ingeniosa que podría escribir hoy. Contratos claros, estructura legible y decisiones que un futuro responsable pueda seguir.",
        },
      ],
    },
    ai: {
      label: "Trabajar con IA",
      title: "Preparar la IA para hacer trabajo de verdad",
      lead: [
        { text: "La IA cambia cómo se construye el software, no si hay que construirlo " },
        { text: "bien", mark: true },
        {
          text: ". La mayor parte del valor no está en el prompt, sino en la ingeniería que permite a un modelo trabajar de forma fiable sobre una base de código real.",
        },
      ],
      items: [
        {
          term: shared.aiTerms.skills,
          desc: "Empaqueto conocimiento de dominio y procedimientos repetibles en skills, para que un agente de IA siga el camino probado en lugar de improvisar. La experiencia vive en el control de versiones, no en la cabeza de una persona ni en un chat de usar y tirar.",
        },
        {
          term: shared.aiTerms.harnesses,
          desc: "Construyo el andamiaje alrededor del modelo —las herramientas, los límites y las comprobaciones en las que se ejecuta— para que produzca resultados correctos y verificables y haga trabajo fiable, no demos de una sola vez.",
        },
        {
          term: "Contexto documentado",
          desc: "Escribo código y documentación que dan a la IA el contexto que necesita para razonar bien: estructura clara, contratos explícitos y el porqué de las decisiones. La misma claridad que ayuda al modelo ayuda a las personas que lo mantienen.",
        },
      ],
    },
    contact: {
      label: "Contacto",
      title: "Trabajemos juntos",
      lead: "Tanto si buscas a alguien para un puesto como si tienes un proyecto que necesita un ingeniero, estoy abierto a ambos.",
      sub: "La forma más rápida de localizarme es el correo o LinkedIn, lo que prefieras.",
      emailCta: "Escríbeme",
      linkedinCta: "Conecta en LinkedIn",
      note: ["Desde España", "Disponible para empleo a tiempo completo y proyectos."],
    },
    footer: {
      role: "Ingeniero de software",
    },
  },
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
