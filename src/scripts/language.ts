import type { Language } from "../i18n";

const STORAGE_KEY = "site-lang";
const DEFAULT_LANG: Language = "ru";

export function getLanguage(): Language {
  if (typeof window === "undefined") return DEFAULT_LANG;

  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && (stored === "ru" || stored === "en")) {
    return stored as Language;
  }

  return DEFAULT_LANG;
}

export function setLanguage(lang: Language): void {
  if (typeof window === "undefined") return;

  localStorage.setItem(STORAGE_KEY, lang);
  window.location.reload();
}

export function initLanguage(): Language {
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get("lang") as Language | null;

  if (urlLang && (urlLang === "ru" || urlLang === "en")) {
    setLanguage(urlLang);
    return urlLang;
  }

  return getLanguage();
}
