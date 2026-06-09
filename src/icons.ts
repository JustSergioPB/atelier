// Central icon set — the single seam for swapping icon libraries later.
// Today these are text glyphs; to move to an SVG library, change only the
// values here (and the rendering in components/Icon.astro). Translations and
// layout never reference a glyph directly.
export const icons = {
  arrowRight: "→",
  arrowUpRight: "↗",
} as const;

export type IconName = keyof typeof icons;
