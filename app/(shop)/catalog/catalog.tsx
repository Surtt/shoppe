'use client';

import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { getFilter, getProducts, getUrlWithParams, urlWithParams } from '@/api';
import { Filter, Paginate, ProductCard } from '@/components';
import { SelectOption } from '@/types/select-option';
import styles from './page.module.css';

export default function Catalog() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selectedValueFromURL = searchParams.get('categoryId');
  const minPriceFromURL = searchParams.get('priceMin');
  const maxPriceFromURL = searchParams.get('priceMax');
  const switchedDiscount = !!searchParams.get('discounted');

  const [currentPage, setCurrentPage] = useState<number>(1);
  const offset = currentPage - 1;
  const [switchState, setSwitchState] = useState<boolean>(
    switchedDiscount ? switchedDiscount : false,
  );

  const { data: filter } = useQuery({
    queryKey: ['filter'],
    queryFn: getFilter,
  });

  const [rangeValues, setRangeValues] = useState<{ min: number; max: number }>({
    min: Number(minPriceFromURL)
      ? Number(minPriceFromURL)
      : (filter?.minPrice as number),
    max: Number(maxPriceFromURL)
      ? Number(maxPriceFromURL)
      : (filter?.maxPrice as number),
  });

  const selectOptions = filter?.categories.map(({ id, name }) => {
    return { value: id, label: name };
  });

  const selectedOptionFromURL = selectOptions?.filter(
    (o) => o.value === Number(selectedValueFromURL),
  )[0];

  const [selectedOption, setSelectedOption] = useState<SelectOption | null>(
    selectedOptionFromURL ? selectedOptionFromURL : null,
  );

  useEffect(() => {
    router.push(
      getUrlWithParams(
        pathname,
        urlWithParams(
          6,
          offset,
          selectedOption?.value,
          rangeValues.min,
          rangeValues.max,
          // rangeValues.min > filter?.minPrice && rangeValues.min,
          // rangeValues.max < filter?.maxPrice && rangeValues.max,
          switchState,
        ),
      ),
    );
  }, [
    router,
    pathname,
    selectedOption?.value,
    rangeValues.min,
    rangeValues.max,
    switchState,
    filter,
    offset,
  ]);

  const { data: products, isLoading } = useQuery({
    queryKey: [
      'products',
      selectedOption,
      rangeValues,
      switchState,
      currentPage,
    ],
    queryFn: () =>
      getProducts(
        6,
        currentPage,
        selectedOption?.value,
        rangeValues.min,
        rangeValues.max,
        switchState,
      ),
  });

  const onChangeNumberPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <section className={styles.sidebarWrapper}>
        <Filter
          selectedOption={selectedOption}
          onSelectOption={setSelectedOption}
          selectOptions={selectOptions as SelectOption[]}
          rangeValues={rangeValues}
          onRangeValues={setRangeValues}
          minPrice={filter?.minPrice as number}
          maxPrice={filter?.maxPrice as number}
          switchState={switchState}
          onSwitch={setSwitchState}
        />
      </section>
      {isLoading && <h2>Loading...</h2>}
      <section className={styles.cardsWrapper}>
        {products?.products.map(({ name, price, discount, images }, idx) => (
          <ProductCard
            key={idx.toString()}
            name={name}
            price={price}
            discount={discount}
            img={images[0]}
          />
        ))}
        <Paginate
          current={currentPage}
          total={products?.totalProducts}
          // pageSize={6}
          // onChange={() => setCurrentPage((current) => current + 1)}
          onChange={onChangeNumberPage}
        />
      </section>
    </>
  );
}
