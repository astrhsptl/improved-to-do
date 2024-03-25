import { FC } from 'react';
import { DefaultInput } from '@/features/forms/default-input.tsx';

export const EmailInput: FC = () => {
  return (
    <DefaultInput
      icon={'/email-icon.svg'}
      name={'email'}
      registerOptions={{
        required: 'field required',
        pattern: {
          value: /^[\w]+@([\w-]+\.)+[\w-]{2,6}$/,
          message: 'incorrect format',
        },
      }}
    />
  );
};
