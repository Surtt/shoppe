import { Filter } from './types/filter';
import { Products } from './types/product';

export const API = {
  products: `${process.env.NEXT_PUBLIC_DOMAIN}/api-demo/products`,
};

export const getUrlWithParams = (url: string, params: URLSearchParams) => {
  return `${url}?${params}`;
};

export const urlWithParams = (
  limit: number,
  offset: number,
  categoryId?: number,
  priceMin?: number,
  priceMax?: number,
  discounted?: boolean,
) => {
  const params = new URLSearchParams({
    limit: limit.toString(),
    offset: offset.toString(),
  });
  categoryId && params.append('categoryId', categoryId.toString());
  priceMin && params.append('priceMin', priceMin.toString());
  priceMax && params.append('priceMax', priceMax.toString());
  discounted && params.append('discounted', discounted.toString());
  return params;
};

export const getFilter = async (): Promise<Filter> => {
  const res = await fetch(`${API.products}/get-filter`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

export const getProducts = async (
  limit: number,
  offset: number,
  categoryId?: number,
  priceMin?: number,
  priceMax?: number,
  discounted?: boolean,
): Promise<Products> => {
  const res = await fetch(
    getUrlWithParams(
      API.products,
      urlWithParams(limit, offset, categoryId, priceMin, priceMax, discounted),
    ),
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};
