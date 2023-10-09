import cn from 'classnames';
import { MenuProps } from '@/components/menu/menu.props';
import { MenuItem } from '@/components';
import styles from './menu.module.css';

const Menu = ({ items, className, ...props }: MenuProps) => {
  return (
    <nav {...props} className={className}>
      <ul className={styles.menu}>
        {items?.map(({ icon, name, to }) => (
          <MenuItem key={name} icon={icon} to={to} name={name} />
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
