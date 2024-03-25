import { LoginStyle, Text, translate } from '@/shared';
import { clsx } from 'clsx';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { ErrorMessage } from '@hookform/error-message';

interface LoginData {
  email: string;
  password: string;
}

export const Login: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>();

  const onSub: SubmitHandler<LoginData> = (data) => {
    console.log(data);
  };

  return (
    <section className={clsx(LoginStyle.loginLay)}>
      <form className={LoginStyle.loginForm} onSubmit={handleSubmit(onSub)}>
        <h1 className={LoginStyle.loginTitle}>
          <Text>login</Text>
        </h1>
        <p>
          <Text>or</Text> <Link to={'/sign-up'}>{translate('reg')}</Link>
        </p>
        <ErrorMessage
          errors={errors}
          name='password'
          render={({ message }) => <p>{message}</p>}
        />
        <div className={clsx(LoginStyle.loginInputComponent)}>
          <img src='/email-icon.svg' alt='' />
          <input
            type='email'
            placeholder={`${translate('email')}...`}
            {...register('email', {
              required: 'required',
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/,
                message: 'Corrertt',
              },
            })}
          />
        </div>

        <ErrorMessage
          errors={errors}
          name='password'
          render={({ message }) => <p>{message}</p>}
        />
        <div className={clsx(LoginStyle.loginInputComponent)}>
          <img src='/lock-icon.svg' alt='' />
          <input
            type='password'
            placeholder={`${translate('password')}...`}
            {...register('password', { required: 'required' })}
          />
        </div>

        <button type='submit' className={LoginStyle.btn}>
          <Text>login</Text>
        </button>
      </form>
    </section>
  );
};
