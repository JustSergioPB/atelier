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
    placeholder: "Tech",
  },
  // AI capability names kept in English across locales.
  aiTerms: {
    skills: "Skills",
    harnesses: "Harnesses",
  },
} as const;
