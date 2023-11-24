import cn from 'classnames';
import Image from 'next/image';
import { Title } from '@/components';
import styles from './carousel-card.module.css';
import { CarouselCardProps } from './carousel-card.props';

const CarouselCard = ({ name, price, img, device }: CarouselCardProps) => {
  console.log(device);
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
      <div
        className={cn(styles.imgWrapper, {
          [styles.imgWrapperDesktop]: device.desktop.breakpoint.max,
          [styles.imgWrapperTable]: device.tablet.breakpoint.max,
          [styles.imgWrapperMobile]: device.mobile.breakpoint.max,
        })}
      >
        <Image
          src={img}
          alt={name}
          fill
          priority={true}
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  );
};

export default CarouselCard;
