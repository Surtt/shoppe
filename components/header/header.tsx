import cn from 'classnames';
import { Logo, Navigation } from '@/components';
import { HeaderProps } from '@/components/header/header.props';
import styles from './header.module.css';

export const Header = ({ className, ...props }: HeaderProps) => {
  return (
    <header {...props} className={cn(className, styles.header)}>
      <Logo />
      <div className={styles.rightSide}>
        <Navigation />
      </div>
    </header>
  );
};
