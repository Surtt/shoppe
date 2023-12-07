export type ProductQuery = {
  limit: number;
  offset: number;
  name?: string;
  priceMin?: number;
  priceMax?: number;
  categoryId?: number;
  discounted?: boolean;
};
