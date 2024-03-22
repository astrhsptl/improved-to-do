import { LS } from '@/entities';

export const useTranslate = (text: string) => {
  return LS.dict[text];
};
