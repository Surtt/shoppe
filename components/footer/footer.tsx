import cn from 'classnames';
import { FooterProps } from '@/components/footer/footer.props';
import { SubscribeInput } from '@/components';
import styles from './footer.module.css';
import { Menu } from '..';
import LinkedInIcon from '../../public/icons/linkedin.svg';
import FacebookIcon from '../../public/icons/facebook.svg';
import InstagramIcon from '../../public/icons/instagram.svg';
import TwitterIcon from '../../public/icons/twitter.svg';

const footerMenu = [
  {
    name: 'Контакты',
    to: '/contacts',
  },
  {
    name: 'Условия покупки',
    to: '/terms',
  },
  {
    name: 'Доставка и возврат',
    to: 'delivery-and-return',
  },
];

export const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <footer {...props} className={cn(className, styles.footer)}>
      <Menu className={styles.footerMenu} items={footerMenu} />
      <SubscribeInput />
      <span className={styles.copyright}>© 2024 Shoppe</span>
      <div className={styles.icons}>
        <LinkedInIcon />
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
      </div>
    </footer>
  );
};
