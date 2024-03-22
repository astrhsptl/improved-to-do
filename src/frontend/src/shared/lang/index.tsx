'use client';
import { LS } from '@/entities';
import { observer } from 'mobx-react-lite';
import { FC } from 'react';

interface TextProps {
  children: string;
}

export const Text: FC<TextProps> = observer(({ children }) => {
  return <>{tranlate(children) ?? children}</>;
});

export const tranlate = (text: string) => {
  return LS.dict[text.toLowerCase()];
};

export * from './use-change-lang';
