import { useContext, useState, createContext, ReactNode } from "react";

type LanguageContextType = {
  language: string,
  switchLanguage: (lang: string) => void,
};

const LanguageContext = createContext< LanguageContextType | undefined>(undefined);

type LanguageProviderType = { children: ReactNode, };

export default function LanguageProvider({ children }: LanguageProviderType) {
  const [language, setLanguage] = useState<string>("en");

  const switchLanguage = (lang: string) => setLanguage(lang);

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
