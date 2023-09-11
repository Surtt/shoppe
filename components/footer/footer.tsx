import cn from 'classnames';
import { FooterProps } from '@/components/footer/footer.props';
import styles from './footer.module.css';

export const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <footer {...props} className={cn(className, styles.footer)}>
      Footer
    </footer>
  );
};
