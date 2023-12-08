import { Metadata } from 'next';
import { getProductBySku, getProducts } from '@/api';
import styles from './page.module.css';

type MetadataProps = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateStaticParams() {
  const products = await getProducts(100, 0);
  return products.products.map((product) => ({
    slug: product.sku.toString(),
  }));
}

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const slug = params.slug;

  const product = await getProductBySku(slug);

  return {
    title: `Купить ${product.name} в магазине Shoppe`,
    description: `${product.name} - ${product.description}`,
  };
}

export default async function Product({ params }: MetadataProps) {
  const product = await getProductBySku(params.slug);
  console.log(product);
  return (
    <main className={styles.body}>
      <h1>Hello, Product page {params.slug}!</h1>
    </main>
  );
}
