import React from 'react';
import cn from 'classnames';
import { NavigationProps } from '@/components/navigation/navigation.props';
import { Menu } from '@/components';
import { Search } from '@/components/search/search';
import styles from './navigation.module.css';
import CartIcon from '../../public/icons/cart.svg';
import HeartIcon from '../../public/icons/heart.svg';
import UserIcon from '../../public/icons/user.svg';

export const Navigation = ({ className, ...props }: NavigationProps) => {
  return (
    <nav {...props} className={cn(className, styles.navigation)}>
      <Menu />
      <div className={styles.divider}></div>
      <div className={styles.rightSide}>
        <Search />
        <CartIcon />
        <HeartIcon />
        <UserIcon />
      </div>
    </nav>
  );
};
