import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { dmSans } from '@/app/fonts';
import { Header, Footer } from '@/components';

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
        <div className='wrapper'>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
