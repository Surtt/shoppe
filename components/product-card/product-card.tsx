'use client';

import cn from 'classnames';
import Image from 'next/image';
import { useState } from 'react';
import IconCart from '@/public/icons/cart.svg';
import IconEye from '@/public/icons/eye.svg';
import IconHeart from '@/public/icons/heart.svg';
import styles from './product-card.module.css';
import { ProductCardProps } from './product-card.props';

const getPriceWithDiscount = (price: number, discount: number) => {
  const amount = (price / 100) * discount;
  return price - amount;
};

const ProductCard = ({
  name,
  price,
  discount,
  img,
  imgSize,
  className,
  ...props
}: ProductCardProps) => {
  const imgStyles = {
    [styles.imgWrapper300]: imgSize === '300px',
    [styles.imgWrapper380]: imgSize === '380px',
  };

  const [isShown, setIsShown] = useState(false);
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const handleShow = () => setIsShown((shown) => !shown);

  return (
    <div {...props} className={cn(className, styles.productCardWrapper)}>
      <div
        onMouseLeave={handleShow}
        onMouseEnter={handleShow}
        className={cn(styles.imgWrapper, imgStyles)}
      >
        <Image
          className={styles.img}
          src={img}
          alt={name}
          sizes={imgSize}
          fill
          priority={true}
        />
        {discount && <span className={styles.discountBadge}>-{discount}%</span>}
        <IconHeart className={styles.favourite} width='19' height='18' />
        {isShown && (
          <div className={cn(styles.buttons, imgStyles)}>
            <IconCart className={styles.icon} width={25} height={25} />
            <IconEye className={styles.icon} width={32} height={32} />
            <IconHeart className={styles.icon} width={25} height={25} />
          </div>
        )}
      </div>
      <p className={styles.name}>{name}</p>
      <div className={styles.priceWrapper}>
        <span
          className={cn({
            [styles.price]: !discount,
            [styles.discount]: discount,
          })}
        >
          {formattedPrice.format(price)}
        </span>
        {discount && (
          <span className={styles.price}>
            {formattedPrice.format(getPriceWithDiscount(price, discount))}
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
