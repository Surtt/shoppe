'use client';

import { Range, Search, Select, Switch } from '@/components';
import { FilterProps } from './filter.props';
import { TValue } from '../range/range.props';

const Filter = ({
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
      <Search />
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
