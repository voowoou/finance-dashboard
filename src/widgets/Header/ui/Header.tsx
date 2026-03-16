import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { FinancyIcon, LogoIcon } from '@/shared/assets';
import { NAV_ROUTES, ROUTES_NAMES } from '@/shared/config';
import s from './Header.module.css';

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.headerContent}>
        <div className={s.logoContainer}>
          <LogoIcon />
          <FinancyIcon />
        </div>

        <nav className={s.navigation}>
          <ul>
            {Object.values(NAV_ROUTES).map((route) => (
              <li key={route}>
                <NavLink
                  to={route}
                  className={({ isActive }) =>
                    clsx(s.navLink, isActive && s.active)
                  }
                >
                  {ROUTES_NAMES[route]}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className={s.avatar} />
      </div>
    </header>
  );
};
