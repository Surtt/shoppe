import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { dmSans } from '@/app/fonts';
import { Footer, Header } from '@/components';
import Providers from './providers';

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
          <Providers>
            <Header />
            {children}
            <Footer />
          </Providers>
        </div>
      </body>
    </html>
  );
}
