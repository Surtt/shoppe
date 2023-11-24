import { Allerta_Stencil, Open_Sans } from 'next/font/google';

export const dmSans = Open_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin', 'cyrillic'],
  variable: '--font-open-sans',
});

export const allertaStencil = Allerta_Stencil({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-allerta-stencil',
});
