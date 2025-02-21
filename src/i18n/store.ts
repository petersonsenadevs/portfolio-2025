import { atom } from 'nanostores';
// Define supported languages
type Language = 'es' | 'en';
// Default language is Spanish
export const currentLang = atom<Language>(
  (typeof localStorage !== 'undefined' && localStorage.getItem('language') as Language) || 'es'
);

export function setLanguage(lang: Language) {
  currentLang.set(lang);
  localStorage.setItem('language', lang);
  
  // Update document language
  document.documentElement.lang = lang;
  
  // Toggle visibility of language-specific elements
  document.querySelectorAll('.es, .en').forEach(el => {
    el.classList.toggle('hidden', el.classList.contains(lang) ? false : true);
  });
}

// Initialize language on page load
if (typeof window !== 'undefined') {
  const initialLang = currentLang.get();
  document.documentElement.lang = initialLang;
  
  // Set initial visibility
  document.querySelectorAll('.es, .en').forEach(el => {
    el.classList.toggle('hidden', el.classList.contains(initialLang) ? false : true);
  });
}