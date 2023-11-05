'use client';

import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useForm, useWatch } from 'react-hook-form';
import { getFilter, getProducts, getUrlWithParams, urlWithParams } from '@/api';
import { Filter, Paginate, ProductCard } from '@/components';
import { SelectOption } from '@/types/select-option';
import styles from './page.module.css';

export default function Catalog() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const offsetValueFromURL = Number(searchParams.get('offset'));
  const searchedValuefromURL = searchParams.get('name');
  const selectedValueFromURL = Number(searchParams.get('categoryId'));
  const minPriceFromURL = Number(searchParams.get('priceMin'));
  const maxPriceFromURL = Number(searchParams.get('priceMax'));
  const switchedDiscount = !!searchParams.get('discounted');

  const [currentPage, setCurrentPage] = useState<number>(
    offsetValueFromURL + 1 ? offsetValueFromURL + 1 : 1,
  );
  const offset = currentPage - 1;

  const [switchState, setSwitchState] = useState<boolean>(
    switchedDiscount ? switchedDiscount : false,
  );

  const { register, control } = useForm<{
    search: string;
  }>({
    defaultValues: {
      search: searchedValuefromURL ? searchedValuefromURL : '',
    },
  });
  const search = useWatch({
    control,
    name: 'search',
    defaultValue: searchedValuefromURL ? searchedValuefromURL : '',
  });

  const { data: filter } = useQuery({
    queryKey: ['filter'],
    queryFn: getFilter,
  });

  const [rangeValues, setRangeValues] = useState<{ min: number; max: number }>({
    min: minPriceFromURL ? minPriceFromURL : (filter?.minPrice as number),
    max: maxPriceFromURL ? maxPriceFromURL : (filter?.maxPrice as number),
  });

  const selectOptions = filter?.categories.map(({ id, name }) => {
    return { value: id, label: name };
  });

  const selectedOptionFromURL = selectOptions?.filter(
    (o) => o.value === selectedValueFromURL,
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
          search,
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
    search,
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
      search,
      selectedOption,
      rangeValues,
      switchState,
      currentPage,
    ],
    queryFn: () =>
      getProducts(
        6,
        currentPage,
        search,
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
          register={register}
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
            imgSize='300px'
          />
        ))}
        <Paginate
          current={currentPage}
          total={products?.totalProducts}
          onChange={onChangeNumberPage}
        />
      </section>
    </>
  );
}
