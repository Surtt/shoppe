import { ReactNode } from 'react';

interface CatalogLayoutProps {
  children: ReactNode;
}

export default function CatalogLayout({ children }: CatalogLayoutProps) {
  return (
    <main>
      <section>Sidebar</section>
      {children}
    </main>
  );
}
