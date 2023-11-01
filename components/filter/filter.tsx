'use client';

import { Input, Range, Select, Switch } from '@/components';
import SearchIcon from '@/public/icons/search.svg';
import { FilterProps } from './filter.props';
import styles from './filter.module.css';
import { TValue } from '../range/range.props';

const Filter = ({
  register,
  selectedOption,
  onSelectOption,
  selectOptions,
  rangeValues,
  onRangeValues,
  minPrice,
  maxPrice,
  switchState,
  onSwitch,
}: FilterProps) => {
  return (
    <>
      <Input
        {...register('search')}
        placeholder='Поиск...'
        variant='subscribe'
        icon={<SearchIcon className={styles.searchIcon} />}
      />
      <Select
        options={selectOptions}
        selectedOption={selectedOption}
        onSelectOption={onSelectOption}
      />
      <Range
        step={5}
        min={minPrice}
        max={maxPrice}
        values={rangeValues as TValue}
        onChangeValue={onRangeValues}
      />
      <Switch switchState={switchState} onSwitch={onSwitch} />
    </>
  );
};

export default Filter;
