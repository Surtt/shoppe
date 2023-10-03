import React from 'react';
import cn from 'classnames';
import { MobileMenuProps } from '@/components/menu/mobile-menu/mobile-menu.props';
import UserIcon from '@/public/icons/user.svg';
import HeartIcon from '@/public/icons/heart.svg';
import ExitIcon from '@/public/icons/exit.svg';
import { Menu, SearchInput } from '@/components';
import styles from './mobile-menu.module.css';

export const mainMenu = [
  {
    name: 'Главная',
    to: '/',
  },
  {
    name: 'Магазин',
    to: '/catalog',
  },
  {
    name: 'О нас',
    to: '/about-us',
  },
];

export const additionalMenu = [
  {
    icon: <UserIcon />,
    name: 'Мой аккаунт',
    to: '/account',
  },
  {
    icon: <HeartIcon />,
    name: 'Избранное',
    to: '/favourites',
  },
  {
    icon: <ExitIcon />,
    name: 'Выход',
    to: '/',
  },
];

const MobileMenu = ({ className, ...props }: MobileMenuProps) => {
  return (
    <div {...props} className={cn(className, styles.mobileMenu)}>
      <SearchInput className={styles.mobileMenuSearch} />

      <Menu items={mainMenu} />

      <div className={styles.divider}></div>

      <Menu className={styles.additionalMenu} items={additionalMenu} />
    </div>
  );
};

export default MobileMenu;
