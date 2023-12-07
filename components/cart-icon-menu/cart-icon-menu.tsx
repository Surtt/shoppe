import { CartIconMenuProps } from '@/components/cart-icon-menu/cart-icon-menu.props';
import CartIcon from '@/public/icons/cart.svg';
import styles from './cart-icon-menu.module.css';

const CartIconMenu = ({ goodAmount }: CartIconMenuProps) => {
  return (
    <div className={styles.iconWrapper}>
      <CartIcon width='21' height='21' />
      <div className={styles.productAmount}>{goodAmount}</div>
    </div>
  );
};

export default CartIconMenu;
