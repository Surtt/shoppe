import './globals.css';
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import { ReactNode } from 'react';

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-ds-sans',
});

export const metadata: Metadata = {
  title: 'Shoppe | Main Page',
  description: 'Shoppe Online Store',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='ru'>
      <body className={dmSans.className}>
        <header>Header</header>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  );
}
