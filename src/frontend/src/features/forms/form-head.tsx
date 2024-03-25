import { AuthBaseStyles, Text, translate } from '@/shared';
import { Link } from 'react-router-dom';
import { FC } from 'react';

interface FormHeadProps {
  head: string;
  description: string;
  link: string;
}

export const FormHead: FC<FormHeadProps> = ({ head, description, link }) => {
  return (
    <>
      <h1 className={AuthBaseStyles.loginTitle}>
        <Text up>{head}</Text>
      </h1>
      <p className={AuthBaseStyles.loginSubTitle}>
        <Text>or</Text> <Link to={link}>{translate(description)}</Link>
      </p>
    </>
  );
};
