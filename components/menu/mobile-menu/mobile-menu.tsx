import cn from 'classnames';
import { Menu, SearchInput } from '@/components';
import { MobileMenuProps } from '@/components/menu/mobile-menu/mobile-menu.props';
import styles from './mobile-menu.module.css';
import { additionalMenu, mainMenu } from '../menu-lists';

const MobileMenu = ({ className, ...props }: MobileMenuProps) => {
  return (
    <div {...props} className={cn(className, styles.mobileMenu)}>
      <SearchInput className={styles.mobileMenuSearch} />

      <Menu items={mainMenu} />

      <hr className={styles.divider} />

      <Menu className={styles.additionalMenu} items={additionalMenu} />
    </div>
  );
};

export default MobileMenu;
