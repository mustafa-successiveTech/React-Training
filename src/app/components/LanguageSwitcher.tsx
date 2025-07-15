"use client";
import { useLanguage } from "../context/LanguageContext";

type SupportedLanguage = "en" | "es";

const translations: Record<SupportedLanguage, { greeting: string }> = {
  en: {
    greeting: "Hello! Welcome to our website.",
  },
  es: {
    greeting: "¡Hola! Bienvenido a nuestro sitio web.",
  },
};

export default function LanguageSwitcher() {
  const { language, switchLanguage } = useLanguage();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{translations[language as SupportedLanguage].greeting}</h1>

      <div style={{ marginTop: "1rem" }}>
        <button onClick={() => switchLanguage("en")}>English</button>
        <button
          onClick={() => switchLanguage("es")}
          style={{ marginLeft: "10px" }}
        >
          Español
        </button>
      </div>
    </div>
  );
}
