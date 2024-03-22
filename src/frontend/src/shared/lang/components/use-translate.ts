import { useEffect, useMemo, useState } from 'react';
import { testLazyLoad } from '../dicts';

export const useCurrentLanguage = (lang?: string) => {
  const [dict, setDict] = useState({});

  useEffect(() => {
    testLazyLoad(lang).then((r) => setDict(r));
  });

  return useMemo(() => {
    return dict;
  }, [dict]);
};

export const useTranslate = (text: string, lang?: string) => {
  const cLang = useCurrentLanguage(lang);
  console.log(cLang);
  return cLang[text];
};
