'use client';

import { Text } from '@/shared';
import { SubmitHandler, useForm } from 'react-hook-form';

interface AuthInput {
  email: string;
  password: string;
}

export const AuthFormLayout = () => {
  const { register, handleSubmit } = useForm<AuthInput>();
  const onSubmit: SubmitHandler<AuthInput> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={() => handleSubmit(onSubmit)}>
      <input {...(register('email'), { required: true })} />
      <input {...register('password', { required: true })} />
      <button type='submit'>
        <Text>login</Text>
      </button>
    </form>
  );
};
