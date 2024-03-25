import { FC } from 'react';
import { DefaultInput } from '@/features/forms/default-input.tsx';

export const PasswordInput: FC = () => {
  return (
    <DefaultInput
      icon={'/lock-icon.svg'}
      name={'password'}
      registerOptions={{
        required: 'field required',
      }}
    />
  );
};
