import { useContext, useState, createContext, ReactNode } from "react";

type SupportedLanguage = "en" | "es";

const translations: Record<SupportedLanguage, { greeting: string }> = {
  en: { greeting: "Hello! Welcome to our website." },
  es: { greeting: "¡Hola! Bienvenido a nuestro sitio web." },
};

type LanguageContextType = {
  language: SupportedLanguage;
  switchLanguage: (lang: SupportedLanguage) => void;
  translations: typeof translations;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

type LanguageProviderType = { children: ReactNode };

export default function LanguageProvider({ children }: LanguageProviderType) {
  const [language, setLanguage] = useState<SupportedLanguage>("en");

  const switchLanguage = (lang: SupportedLanguage) => setLanguage(lang);

  return (
    <LanguageContext.Provider
      value={{ language, switchLanguage, translations }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
}
