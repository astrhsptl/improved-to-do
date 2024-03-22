import { LS, langs } from '@/entities';

export const useLang = () => {
  return (lang?: langs) => {
    if (lang) {
      LS.lang = lang;
      return;
    }

    for (const i of LS.langLabels) {
      if (i !== LS.lang) {
        LS.lang = i as langs;
        return;
      }
    }
  };
};
