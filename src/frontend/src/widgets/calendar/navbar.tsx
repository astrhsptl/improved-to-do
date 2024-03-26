import { FC, memo } from 'react';
import { NavbarStyles } from '@/shared';
import { NavbarLinks, NavbarLogo } from '@/features';

const NavbarFC: FC = () => {
  return (
    <nav className={NavbarStyles.nav}>
      <NavbarLogo />
      <NavbarLinks />
    </nav>
  );
};

export const Navbar = memo(NavbarFC);
