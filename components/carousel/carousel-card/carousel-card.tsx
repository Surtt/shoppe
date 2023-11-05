import { CarouselCardProps } from './carousel-card.props';
import styles from './carousel-card.module.css';
import { Title } from '@/components';
import Image from 'next/image';

const CarouselCard = ({ name, price, img }: CarouselCardProps) => {
  const formatPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'USD',
  }).format(price);

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.productInfoWrapper}>
        <Title tag='h1' className={styles.title}>
          {name}
        </Title>
        <span className={styles.price}>{formatPrice}</span>
        <button className={styles.btn}>Смотреть</button>
      </div>
      <Image src={img} alt={name} priority={true} />
    </div>
  );
};

export default CarouselCard;
