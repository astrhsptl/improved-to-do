import { FC } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import { ClassValue, clsx } from 'clsx';
import { AuthBaseStyles, BaseStyle, Text, translate } from '@/shared';

interface DefaultInputProps {
  name: string;
  icon: string;
  registerOptions?: RegisterOptions;
  classes?: ClassValue[];
}

export const DefaultInput: FC<DefaultInputProps> = ({
  name,
  icon,
  registerOptions,
  classes,
}) => {
  const {
    formState: { errors },
    register,
  } = useFormContext();

  if (!classes) {
    classes = [];
  }

  return (
    <>
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <span className={AuthBaseStyles.authInputError}>
            <Text>{message}</Text>
          </span>
        )}
      />
      <div className={clsx(BaseStyle.baseInputComponent, ...classes)}>
        <img src={icon} />
        <input
          type='text'
          placeholder={`${translate(name, true)}...`}
          {...register(name, registerOptions)}
        />
      </div>
    </>
  );
};
