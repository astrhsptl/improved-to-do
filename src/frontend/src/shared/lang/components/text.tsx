import { FC } from 'react';
import { useLang } from '..';

interface TextProps {
  children: string;
}

export const Text: FC<TextProps> = ({ children }) => {
  const dict = useLang();
  console.log('lang');
  console.log(dict);

  return <>{children}</>;
};
