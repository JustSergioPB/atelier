// Client-side cookie-consent state.
//
// This site only uses "functional" storage — remembering your theme. This
// module records whether the visitor allows that, and is the single place the
// theme control and the banner agree on. The consent record itself is strictly
// necessary, so it is always stored; everything else is gated on `accept`.
export const CONSENT_KEY = "cookie-consent";
export const THEME_KEY = "theme";
export const CONSENT_EVENT = "cookie-consent-change";

export type Consent = "accept" | "reject";

export function getConsent(): Consent | null {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === "accept" || v === "reject" ? v : null;
  } catch (e) {
    return null;
  }
}

export function setConsent(value: Consent): void {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch (e) {}

  // Rejecting withdraws functional storage — forget the remembered theme so it
  // isn't carried into the next visit.
  if (value === "reject") {
    try {
      localStorage.removeItem(THEME_KEY);
    } catch (e) {}
  }

  try {
    window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
  } catch (e) {}
}
