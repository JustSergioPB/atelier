// Language-invariant text — identical in every locale. Referenced from the
// per-locale dictionary (ui.ts) and components so a proper noun or tech name is
// written once. Anything that gets translated stays in ui.ts.
export const shared = {
  name: "Sergio Peña Bayona",
  brand: {
    linkedin: "LinkedIn",
  },
  // Technology / product names — proper nouns, not translated.
  tech: {
    angular: "Angular",
    angularMaterial: "Angular Material",
    fuse: "Fuse",
    astro: "Astro",
    tailwind: "Tailwind CSS",
    sanity: "Sanity CMS",
    vue: "Vue 3",
    nestjs: "NestJS",
    fastapi: "FastAPI",
    thingsboard: "ThingsBoard",
    sentry: "Sentry",
    pwa: "PWA",
    placeholder: "Tech",
    javascript: "JavaScript",
    openai: "OpenAI API",
    verifiableCredentials: "W3C VC 2.0",
    saas: "SaaS",
    mobile: "Mobile App",
  },
  // AI capability names kept in English across locales.
  aiTerms: {
    skills: "Skills",
    harnesses: "Harnesses",
  },
} as const;
