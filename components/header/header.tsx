'use client';
import cn from 'classnames';
import React, { useState } from 'react';
import { CartIconMenu, Logo } from '@/components';
import { HeaderProps } from '@/components/header/header.props';
import CloseIcon from '@/public/icons/close.svg';
import BurgerIcon from '@/public/icons/burger.svg';
import { Navigation } from '@/components/navigation/navigation';
import { MobileMenu } from '@/components/menu/mobile-menu/mobile-menu';
import styles from './header.module.css';

export const Header = ({ className, ...props }: HeaderProps) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const handleOpenMobileMenu = () => setIsOpenMenu((open) => !open);
  return (
    <header {...props} className={cn(className, styles.header)}>
      <Logo />
      <div className={styles.rightSide}>
        <div className={styles.mobileMenuWrapper}>
          <CartIconMenu goodAmount={1} />
          {isOpenMenu ? (
            <CloseIcon onClick={handleOpenMobileMenu} />
          ) : (
            <BurgerIcon
              onClick={handleOpenMobileMenu}
              className={styles.burger}
            />
          )}
        </div>
        <Navigation />
      </div>
      {isOpenMenu && <MobileMenu />}
    </header>
  );
};
