import { getProducts } from '@/api';
import { ProductCard } from '@/components';
import styles from './page.module.css';

export default async function Home() {
  const products = await getProducts(6, 0);
  return (
    <main className={styles.body}>
      {products?.products.map(({ name, price, discount, images }, idx) => (
        <ProductCard
          key={idx.toString()}
          name={name}
          price={price}
          discount={discount}
          img={images[0]}
        />
      ))}
    </main>
  );
}
