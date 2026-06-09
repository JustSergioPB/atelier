// Central separators for composing label fragments. Translations store the
// fragments as arrays; the middot lives here only, so restyling it (or swapping
// the character) is a one-line change.
export const MIDDOT = "·";

export function joinMiddot(parts: readonly string[]): string {
  return parts.join(` ${MIDDOT} `);
}
