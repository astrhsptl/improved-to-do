import { LS } from '@/entities';
import { observer } from 'mobx-react-lite';
import { FC } from 'react';

interface TextProps {
  children: string;
  up?: boolean;
}

export const Text: FC<TextProps> = observer(({ children, up }) => {
  return <>{translate(children, up)}</>;
});

export const translate = (text: string, up?: boolean) => {
  let transtaletdText = LS.dict[text.toLowerCase()] ?? text;

  if (!up) {
    transtaletdText = transtaletdText.toLowerCase();
  }

  return transtaletdText;
};

export * from './use-change-lang';
