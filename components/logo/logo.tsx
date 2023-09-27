import cn from 'classnames';
import { allertaStencil } from '@/app/fonts';
import styles from '@/components/logo/logo.module.css';

const Logo = () => {
  return (
    <div className={cn(allertaStencil.className, styles.logo)}>shoppe</div>
  );
};

export default Logo;
