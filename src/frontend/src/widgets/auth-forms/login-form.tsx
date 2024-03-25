import {
  EmailInput,
  FormBaseLayout,
  FormHead,
  PasswordInput,
  SubmitInput,
} from '@/features';
import { SubmitHandler, useForm } from 'react-hook-form';

interface LoginData {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const methods = useForm<LoginData>();
  const onSub: SubmitHandler<LoginData> = (data) => {
    console.log(data);
  };

  return (
    <FormBaseLayout methods={methods} onSub={onSub}>
      <FormHead head={'login'} description={'reg'} link={'/sign-up'} />
      <EmailInput />
      <PasswordInput />
      <SubmitInput text={'login'} />
    </FormBaseLayout>
  );
};
