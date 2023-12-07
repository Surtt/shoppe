import { ReactNode } from 'react';
import styles from './page.module.css';

interface CatalogLayoutProps {
  children: ReactNode;
}

export default function CatalogLayout({ children }: CatalogLayoutProps) {
  return <main className={styles.body}>{children}</main>;
}
