import { FormProvider, UseFormReturn } from 'react-hook-form';
import { clsx } from 'clsx';
import { AuthBaseStyles } from '@/shared';
import { FC, ReactNode } from 'react';

interface FormBaseLayoutProps {
  children: ReactNode;
  methods: UseFormReturn;

  onSub(): void;
}

export const FormBaseLayout: FC<FormBaseLayoutProps> = ({
  onSub,
  children,
  methods,
}) => {
  return (
    <section className={clsx(AuthBaseStyles.loginLay)}>
      <FormProvider {...methods}>
        <form
          className={AuthBaseStyles.loginForm}
          onSubmit={methods.handleSubmit(onSub)}
        >
          {children}
        </form>
      </FormProvider>
    </section>
  );
};
