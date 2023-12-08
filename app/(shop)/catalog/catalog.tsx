'use client';

import { useQuery } from '@tanstack/react-query';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { getFilter, getProducts, getUrlWithParams, urlWithParams } from '@/api';
import { Filter, Paginate, ProductCard } from '@/components';
import useWindowResizeThreshold from '@/hooks/useWindowResize';
import FilterIcon from '@/public/icons/filter.svg';
import { SelectOption } from '@/types/select-option';
import styles from './page.module.css';

export default function Catalog() {
  const isMobileSize = useWindowResizeThreshold(768);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const queries = useMemo(() => {
    return {
      offset: Number(searchParams.get('offset')),
      name: searchParams.get('name'),
      categoryId: Number(searchParams.get('categoryId')),
      priceMin: Number(searchParams.get('priceMin')),
      priceMax: Number(searchParams.get('priceMax')),
      discounted: !!searchParams.get('discounted'),
    };
  }, [searchParams]);

  const [isOpenFilter, setIsOpenFilter] = useState(false);

  const getCurrentNumberPage = useMemo(() => {
    return queries.offset + 1 ? queries.offset + 1 : 1;
  }, [queries.offset]);

  const [currentPage, setCurrentPage] = useState<number>(getCurrentNumberPage);
  const offset = useMemo(() => currentPage - 1, [currentPage]);

  const [switchState, setSwitchState] = useState(
    queries.discounted ? queries.discounted : false,
  );

  const { register, control } = useForm<{
    search: string;
  }>({
    defaultValues: {
      search: queries.name ? queries.name : '',
    },
  });
  const search = useWatch({
    control,
    name: 'search',
    defaultValue: queries.name ? queries.name : '',
  });

  const { data: filter } = useQuery({
    queryKey: ['filter'],
    queryFn: getFilter,
  });

  const [rangeValues, setRangeValues] = useState<{ min: number; max: number }>({
    min: queries.priceMin ? queries.priceMin : (filter?.minPrice as number),
    max: queries.priceMax ? queries.priceMax : (filter?.maxPrice as number),
  });

  const selectOptions = filter?.categories.map(({ id, name }) => {
    return { value: id, label: name };
  });

  const selectedOptionFromURL = selectOptions?.filter(
    (o) => o.value === queries.categoryId,
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

  const handleOpenFilter = () => {
    setIsOpenFilter(!isOpenFilter);
  };

  return (
    <>
      {isMobileSize ? (
        <div className={styles.mobileFilterWrapper} onClick={handleOpenFilter}>
          <FilterIcon />
          <span className={styles.filtersText}>Фильтры</span>
        </div>
      ) : (
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
      )}
      {isOpenFilter && (
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
      )}

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
      </section>
      <Paginate
        className={styles.paginate}
        current={currentPage}
        total={products?.totalProducts}
        onChange={onChangeNumberPage}
      />
    </>
  );
}
