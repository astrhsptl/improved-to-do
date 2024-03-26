import {
  EmailInput,
  FormBaseLayout,
  FormHead,
  PasswordInput,
  SubmitInput,
} from '@/features';
import { SubmitHandler, useForm } from 'react-hook-form';
import { DefaultInput } from '@/features/forms/default-input.tsx';
import { AuthBaseStyles, Text } from '@/shared';

interface RegisterData {
  first_name: string;
  last_name: string;

  phone: string;
  email: string;
  password: string;
}

export const RegisterForm = () => {
  const methods = useForm<RegisterData>();
  const onSub: SubmitHandler<RegisterData> = (data) => {
    console.log(data);
  };

  return (
    <FormBaseLayout methods={methods} onSub={onSub}>
      <FormHead head={'reg'} description={'login'} link={'/login'} />

      <h2 className={AuthBaseStyles.loginSubTitle}>
        <Text up>Personal</Text>
      </h2>
      <DefaultInput
        name={'first_name'}
        icon={'/person.svg'}
        registerOptions={{ required: 'field required' }}
      />
      <DefaultInput
        name={'last_name'}
        icon={'/person.svg'}
        registerOptions={{ required: 'field required' }}
      />

      <h2 className={AuthBaseStyles.loginSubTitle}>
        <Text up>Credential</Text>
      </h2>
      <DefaultInput
        name={'phone'}
        icon={'/phone.svg'}
        registerOptions={{ required: 'field required' }}
      />
      <EmailInput />
      <PasswordInput />

      <SubmitInput text={'login'} />
    </FormBaseLayout>
  );
};
