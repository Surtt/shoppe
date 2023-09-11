import cn from 'classnames';
import { MenuProps } from '@/components/menu/menu.props';
import { MenuItem } from '@/components/menu/menu-item/menu-item';
import styles from './menu.module.css';

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

export const Menu = ({ className, ...props }: MenuProps) => {
  return (
    <ul {...props} className={cn(className, styles.menu)}>
      {menuItems.map(({ name, to }) => (
        <MenuItem key={name} to={to} name={name} />
      ))}
    </ul>
  );
};
