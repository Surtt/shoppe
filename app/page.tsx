import dynamic from 'next/dynamic';
import { Switch } from '@/components';
import styles from './page.module.css';

export default function Home() {
  const DynamicSelect = dynamic(() => import('@/components/select/select'), {
    ssr: false,
  });
  return (
    <main className={styles.body}>
      <DynamicSelect />
      <Switch />
    </main>
  );
}
