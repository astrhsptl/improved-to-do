import { DictType, dicts } from '..';

export const useLang = (lang?: string): DictType | null => {
  if (!lang) lang = 'ru';
  localStorage.setItem('lang', lang);
  const currentLang = localStorage.getItem('lang');

  if (currentLang) return dicts[currentLang];

  return null;
};

export const useTranslate = (lang?: string): DictType | null => {
  if (!lang) lang = 'ru';
  localStorage.setItem('lang', lang);
  const currentLang = localStorage.getItem('lang');

  if (currentLang) return dicts[currentLang];

  return null;
};
