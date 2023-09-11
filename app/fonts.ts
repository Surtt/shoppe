import { Allerta_Stencil, DM_Sans } from 'next/font/google';

export const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-ds-sans',
});

export const allertaStencil = Allerta_Stencil({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-allerta-stencil',
});
