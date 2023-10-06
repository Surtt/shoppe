'use client';

import dynamic from 'next/dynamic';
import { Paginate, Range, Switch } from '@/components';
import styles from './page.module.css';
import { useState } from 'react';

export default function Home() {
  const [value, setValue] = useState({ min: 0, max: 100 });
  const DynamicSelect = dynamic(() => import('@/components/select/select'), {
    ssr: false,
  });
  return (
    <main className={styles.body}>
      <DynamicSelect />
      <Switch />
      <Range
        min={0}
        max={100}
        step={5}
        values={value}
        onChangeValue={setValue}
      />
      <Paginate total={25} />
    </main>
  );
}
