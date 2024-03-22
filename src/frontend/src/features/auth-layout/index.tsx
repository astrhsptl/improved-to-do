'use client';

import { Text } from '@/shared';
import { useState } from 'react';
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

  const [first, setfirst] = useState('en');

  return (
    <form onSubmit={() => handleSubmit(onSubmit)}>
      <input {...(register('email'), { required: true })} />
      <input {...register('password', { required: true })} />
      <button type='submit'>
        <Text lang={first}>login</Text>
      </button>

      <button
        type='button'
        onClick={() => {
          if (first === 'ru') {
            setfirst('en');
            return;
          }
          setfirst('ru');
        }}
      >
        change
      </button>
    </form>
  );
};
