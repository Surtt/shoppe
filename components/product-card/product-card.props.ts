import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ProductCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  name: string;
  price: number;
  img: string;
  imgSize: string;
  discount?: number;
}
