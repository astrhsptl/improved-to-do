import { FC } from 'react';
import { LoginStyle, Text, tranlate } from '@/shared';
import { clsx } from 'clsx';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

//interface

export const Login: FC = () => {
  const { register, handleSubmit } = useForm();

  return (
    <section className={clsx(LoginStyle.loginLay)}>
      <form className={LoginStyle.loginForm}>
        <h1 className={LoginStyle.loginTitle}>Вход</h1>
        <p>
          или <Link to={'/sign-up'}>регитсрация</Link>
        </p>
        <div className={clsx(LoginStyle.loginInputComponent)}>
          <img src='/email-icon.svg' alt='' />
          <input type='email' placeholder={`${tranlate('email')}...`} />
        </div>

        <div className={clsx(LoginStyle.loginInputComponent)}>
          <img src='/lock-icon.svg' alt='' />
          <input type='password' placeholder={`${tranlate('password')}...`} />
        </div>

        <button type='submit' className={LoginStyle.btn}>
          <Text>login</Text>
        </button>
      </form>
    </section>
  );
};
