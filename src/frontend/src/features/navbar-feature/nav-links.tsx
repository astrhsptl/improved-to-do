import { FC } from 'react';
import { NavbarStyles } from '@/shared';
import { NavbarLink } from './nav-link';

export const NavbarLinks: FC = () => {
  return (
    <section className={NavbarStyles.navLinkContainer}>
      <NavbarLink link={'/asdf'} img={'/plug.svg'}>
        Some
      </NavbarLink>
      <NavbarLink link={'/asdf'} img={'/plug.svg'}>
        Some
      </NavbarLink>
      <NavbarLink link={'/asdf'} img={'/plug.svg'}>
        Some
      </NavbarLink>
      <NavbarLink link={'/asdf'} img={'/plug.svg'}>
        Some
      </NavbarLink>
    </section>
  );
};
