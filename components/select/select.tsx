'use client';

import cn from 'classnames';
import React from 'react';

import Select, { StylesConfig } from 'react-select';
import { SelectOption } from '@/types/select-option';
import styles from './select.module.css';
import { SelectProps } from './select.props';

const style: StylesConfig = {
  control: (baseStyles) => ({
    ...baseStyles,
    padding: '7px 12px',
    borderColor: 'rgba(216, 216, 216, 1)',
  }),
  indicatorSeparator: (baseStyles) => ({
    ...baseStyles,
    display: 'none',
  }),
  placeholder: (baseStyles) => ({
    ...baseStyles,
    fontSize: '14px',
    color: 'rgba(0, 0, 0, 1)',
    margin: 0,
  }),
  valueContainer: (baseStyles) => ({
    ...baseStyles,
    padding: 0,
  }),
  input: (baseStyles) => ({
    ...baseStyles,
    padding: 0,
    margin: 0,
  }),
};

const SelectComp = ({
  selectedOption,
  onSelectOption,
  options,
  className,
}: SelectProps) => {
  const handleChange = (option: SelectOption | null) => {
    onSelectOption(option);
  };
  return (
    <Select
      className={cn(className, styles.listBox)}
      styles={style}
      value={selectedOption}
      onChange={(newValue) => handleChange(newValue as SelectOption)}
      options={options}
      placeholder='Категория'
    />
  );
};

export default SelectComp;
