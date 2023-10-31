import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import { Title } from '@/components';
import { getFilter, getProducts } from '@/api';
import styles from './page.module.css';
import Catalog from './catalog';

export default async function CatalogPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['filter'],
    queryFn: getFilter,
  });

  await queryClient.prefetchQuery({
    queryKey: ['products'],
    queryFn: () => getProducts(6, 0),
  });

  return (
    <>
      <Title className={styles.title} tag='h1'>
        Каталог товаров
      </Title>
      <div className={styles.wrapper}>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <Catalog />
        </HydrationBoundary>
      </div>
    </>
  );
}
