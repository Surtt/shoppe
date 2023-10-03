'use client';

import React from 'react';
import cn from 'classnames';
import { NavigationProps } from '@/components/navigation/navigation.props';
import { Menu, Search, CartIconMenu } from '@/components';
import styles from './navigation.module.css';
import HeartIcon from '../../public/icons/heart.svg';
import UserIcon from '../../public/icons/user.svg';

const menuItems = [
  {
    name: 'Магазин',
    to: '/catalog',
  },
  {
    name: 'О нас',
    to: '/about-us',
  },
];
const Navigation = ({ className, ...props }: NavigationProps) => {
  return (
    <>
      <nav {...props} className={cn(className, styles.navigation)}>
        <Menu items={menuItems} />
        <div className={styles.divider}></div>
        <div className={styles.rightSide}>
          <Search />
          <CartIconMenu goodAmount={1} />
          <HeartIcon />
          <UserIcon />
        </div>
      </nav>
    </>
  );
};

export default Navigation;
