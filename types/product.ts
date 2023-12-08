import { Review } from './review';

export type Products = {
  totalProducts: number;
  limit: number;
  offset: number;
  products: Product[];
};

export type Product = {
  name: string;
  price: number;
  discount?: number;
  description: string;
  images: string[];
  categoryId: number;
  sku: number;
  reviews: Review[];
};
