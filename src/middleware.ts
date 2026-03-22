import { defineMiddleware } from "astro:middleware";
import type { Language } from "./i18n";

const DEFAULT_LANG: Language = "ru";
const COOKIE_NAME = "site-lang";

export const onRequest = defineMiddleware((context, next) => {
  // Get language from URL parameter first
  const urlLang = context.url.searchParams.get("lang") as Language | null;

  // Get language from cookie
  const cookieLang = context.cookies.get(COOKIE_NAME)?.value as Language | null;

  // Validate language
  const validLangs: Language[] = ["ru", "en"];
  const lang = urlLang && validLangs.includes(urlLang)
    ? urlLang
    : cookieLang && validLangs.includes(cookieLang)
    ? cookieLang
    : DEFAULT_LANG;

  // Store language in context for use in components
  context.locals.lang = lang;

  // Set cookie if URL parameter was provided
  if (urlLang && validLangs.includes(urlLang)) {
    context.cookies.set(COOKIE_NAME, urlLang, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365, // 1 year
      httpOnly: false,
      secure: false, // Set to true in production with HTTPS
      sameSite: "lax",
    });
  }

  return next();
});
