const { useContext, useState, createContext } = require("react");

const LanguageContext = createContext();

export default function LanguageProvider({children}) {
    const [language, setLanguage] = useState("en");

    const switchLanguage = (lang) => setLanguage(lang);

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
    return useContext(LanguageContext);
}