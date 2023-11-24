'use client';

import cn from 'classnames';
import Carousel, { CarouselProps } from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from './carousel.module.css';
import CustomDot from './custom-dot/custom-dot';
const CarouselComp = ({ children, responsive, className }: CarouselProps) => {
  return (
    <Carousel
      className={cn(className, styles.carousel)}
      customDot={<CustomDot onClick={() => console.log('click')} />}
      swipeable={true}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={9000}
      keyBoardControl={true}
      customTransition='all .5'
      transitionDuration={500}
      containerClass='carousel-container'
      removeArrowOnDeviceType={['desktop', 'tablet', 'mobile']}
      dotListClass='custom-dot-list-style'
      itemClass='carousel-item-padding-40-px'
    >
      {children}
    </Carousel>
  );
};

export default CarouselComp;
