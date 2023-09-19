import cn from 'classnames';
import { MenuProps } from '@/components/menu/menu.props';
import { MenuItem } from '@/components/menu/menu-item/menu-item';
import styles from './menu.module.css';

export const Menu = ({ items, className, ...props }: MenuProps) => {
  return (
    <ul {...props} className={cn(className, styles.menu)}>
      {items?.map(({ icon, name, to }) => (
        <MenuItem key={name} icon={icon} to={to} name={name} />
      ))}
    </ul>
  );
};
