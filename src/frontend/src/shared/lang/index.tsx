'use client';
import { LS } from '@/entities';
import { observer } from 'mobx-react';
import { FC, useEffect } from 'react';

interface TextProps {
  children: string;
}

export const Text: FC<TextProps> = observer(({ children }) => {
  useEffect(() => {
    console.log('adf');
  }, [LS.cLang]);
  return <>{LS.dict[children]}</>;
});
