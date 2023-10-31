import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ProductCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  name: string;
  price: number;
  discount?: number;
  img: string;
}
