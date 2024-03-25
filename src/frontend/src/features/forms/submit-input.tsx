import { BaseStyle, translate } from '@/shared';
import { FC } from 'react';
import { ClassValue, clsx } from 'clsx';

interface SubmitInputProps {
  text: string;
  classes?: ClassValue[];
}

export const SubmitInput: FC<SubmitInputProps> = ({ text, classes }) => {
  if (!classes) {
    classes = [];
  }

  return (
    <input
      type='submit'
      className={clsx(BaseStyle.baseButton, ...classes)}
      value={translate(text, true)}
    />
  );
};
