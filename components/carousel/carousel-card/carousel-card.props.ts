import { StaticImageData } from 'next/image';

export interface CarouselCardProps {
  name: string;
  price: number;
  img: StaticImageData;
}
