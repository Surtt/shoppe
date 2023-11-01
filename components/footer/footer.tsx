'use client';

import cn from 'classnames';
import { useForm } from 'react-hook-form';
import { email, minLength, object, string } from 'valibot';
import { valibotResolver } from '@hookform/resolvers/valibot';
import toast from 'react-hot-toast';
import { Menu } from '@/components';
import LinkedInIcon from '@/public/icons/linkedin.svg';
import FacebookIcon from '@/public/icons/facebook.svg';
import InstagramIcon from '@/public/icons/instagram.svg';
import TwitterIcon from '@/public/icons/twitter.svg';
import ArrowIcon from '@/public/icons/arrow.svg';
import CheckIcon from '@/public/icons/check.svg';
import { Input, Toast } from '@/components';
import { FooterProps } from '@/components/footer/footer.props';
import styles from './footer.module.css';

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

type TForm = {
  email: string;
};

const schema = object({
  email: string('Email is required', [
    minLength(1, 'Please enter your email'),
    email('The email address is badly formatted'),
  ]),
});

const Footer = ({ className, ...props }: FooterProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
  } = useForm<TForm>({
    resolver: valibotResolver(schema),
    defaultValues: {
      email: '',
    },
  });

  const fullYear = new Date().getFullYear();

  const onSubmit = async () => {
    reset();
    toast('Ваш email подписан на новости и уведомления');
  };

  return (
    <footer {...props} className={cn(className, styles.footer)}>
      <Menu className={styles.footerMenu} items={footerMenu} />
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register('email')}
          placeholder='Ваш email для акций и предложений'
          variant='subscribe'
          icon={<ArrowIcon className={styles.arrowIcon} />}
          error={errors.email}
          clearErrors={clearErrors}
          aria-invalid={errors.email ? true : false}
        />
      </form>
      <span className={styles.copyright}>© {fullYear} Shoppe</span>
      <div className={styles.icons}>
        <LinkedInIcon />
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
      </div>
      <Toast icon={<CheckIcon />} />
    </footer>
  );
};

export default Footer;
