import { FC, memo } from 'react';
import { NavbarStyles, Text } from '@/shared';
import { Link } from 'react-router-dom';

interface NavbarLinkFCProps {
  link: string;
  img: string;
  children: string;
}

const NavbarLinkFC: FC<NavbarLinkFCProps> = ({ link, img, children }) => {
  return (
    <Link to={link} className={NavbarStyles.navLink}>
      <img src={img} alt='' />
      <Text>{children}</Text>
    </Link>
  );
};

export const NavbarLink = memo(NavbarLinkFC);
