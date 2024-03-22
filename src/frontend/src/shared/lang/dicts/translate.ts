export const testLazyLoad = (lang: string = 'ru') => {
  return import(`./${lang}.json`);
};
