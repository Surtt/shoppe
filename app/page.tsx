import { getProducts } from '@/api';
import { Carousel, ProductCard, Title } from '@/components';
import styles from './page.module.css';
import Image from 'next/image';
import FirstImgSlide from '@/public/images/Img 2.jpg';
import SecondImgSlice from '@/public/images/Img 2-1.jpg';
import Link from 'next/link';
import CarouselCard from '@/components/carousel/carousel-card/carousel-card';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 320, min: 0 },
    items: 1,
  },
};

export default async function Home() {
  const products = await getProducts(6, 0);
  return (
    <main className={styles.body}>
      <Carousel responsive={responsive}>
        <CarouselCard name='Hal Earrings' price={25} img={FirstImgSlide} />
        <CarouselCard
          name='Kaede Hair Pin Set Of 3'
          price={30}
          img={SecondImgSlice}
        />
        <CarouselCard name='Plaine Necklace' price={19} img={FirstImgSlide} />
        <CarouselCard
          name='Yuki Hair Pin Set of 3'
          price={29}
          img={SecondImgSlice}
        />
      </Carousel>

      <section className={styles.productsSection}>
        <div className={styles.sectionTop}>
          <Title tag='h1' className={styles.title}>
            Последние поступления
          </Title>
          <Link href='/catalog' className={styles.all}>
            Все
          </Link>
        </div>
        <div className={styles.productsWrapper}>
          {products?.products.map(({ name, price, discount, images }, idx) => (
            <ProductCard
              key={idx.toString()}
              name={name}
              price={price}
              discount={discount}
              img={images[0]}
              imgSize='380px'
            />
          ))}
        </div>
      </section>
    </main>
  );
}
