import { FC } from 'react';
import { useTranslate } from './use-translate';

interface TextProps {
  children: string;
  lang?: string;
}

export const Text: FC<TextProps> = ({ children, lang }) => {
  return <>{useTranslate(children, lang)}</>;
};
