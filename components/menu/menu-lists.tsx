import ExitIcon from '@/public/icons/exit.svg';
import HeartIcon from '@/public/icons/heart.svg';
import UserIcon from '@/public/icons/user.svg';

export const mainMenu = [
  {
    name: 'Главная',
    to: '/',
  },
  {
    name: 'Магазин',
    to: '/catalog',
  },
  {
    name: 'О нас',
    to: '/about-us',
  },
];

export const additionalMenu = [
  {
    icon: <UserIcon />,
    name: 'Мой аккаунт',
    to: '/account',
  },
  {
    icon: <HeartIcon />,
    name: 'Избранное',
    to: '/favourites',
  },
  {
    icon: <ExitIcon />,
    name: 'Выход',
    to: '/',
  },
];
