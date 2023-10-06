import React from 'react';
import { CartIconMenuProps } from '@/components/cart-icon-menu/cart-icon-menu.props';
import styles from './cart-icon-menu.module.css';
import CartIcon from '../../public/icons/cart.svg';

const CartIconMenu = ({ goodAmount }: CartIconMenuProps) => {
  return (
    <div className={styles.iconWrapper}>
      <CartIcon />
      <div className={styles.productAmount}>{goodAmount}</div>
    </div>
  );
};

export default CartIconMenu;
