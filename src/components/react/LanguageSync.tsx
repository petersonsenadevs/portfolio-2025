import { useEffect } from "react";
import { currentLang } from "../../i18n/store";

const LanguageSync = () => {
  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as "en" | "es" | null;
    if (savedLang) {
      currentLang.set(savedLang);
    }
  }, []);

  return null;
};

export default LanguageSync;