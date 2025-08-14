"use client";
import { useLanguage } from "../context/LanguageContext";

export default function LanguageSwitcher() {
  const { language, switchLanguage, translations } = useLanguage();

  return (
    <div>
      <h1>{translations[language].greeting}</h1>
      <button onClick={() => switchLanguage("en")}>English</button>
      <button onClick={() => switchLanguage("es")}>Español</button>
    </div>
  );
}
