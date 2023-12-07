import { Category } from './category';

export type Filter = {
  categories: Category[];
  maxPrice: number;
  minPrice: number;
};
