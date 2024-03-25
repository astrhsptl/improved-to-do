'use client';
import { LS } from '@/entities';
import { observer } from 'mobx-react-lite';
import { FC } from 'react';

interface TextProps {
  children: string;
}

export const Text: FC<TextProps> = observer(({ children }) => {
  return <>{translate(children) ?? children}</>;
});

export const translate = (text: string) => {
  return LS.dict[text.toLowerCase()];
};

export * from './use-change-lang';
