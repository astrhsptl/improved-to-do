import { cl } from '@/entities';

export const useLang = (lang?: string) => {
  return cl.lang;
};

export const useTranslate = (text: string, lang?: string) => {};
