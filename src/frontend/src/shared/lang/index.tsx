'use client';
import { LS } from '@/entities';
import { observer } from 'mobx-react-lite';
import { FC } from 'react';

interface TextProps {
  children: string;
}

export const Text: FC<TextProps> = observer(({ children }) => {
  return <>{LS.dict[children]}</>;
});

export * from './use-change-lang';
