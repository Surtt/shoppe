import { StaticImageData } from 'next/image';
import { responsive } from '@/components/carousel/carousel-breakpoints';

export interface CarouselCardProps {
  name: string;
  price: number;
  img: StaticImageData;
  device: typeof responsive;
}
