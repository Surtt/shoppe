'use client';

import React from 'react';
import cn from 'classnames';

import Select, { StylesConfig } from 'react-select';
import { SelectOption } from '@/types/select-option';
import { SelectProps } from './select.props';
import styles from './select.module.css';

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
  ...props
}: SelectProps) => {
  const handleChange = (option: SelectOption | null) => {
    onSelectOption(option);
  };
  return (
    <Select
      {...props}
      className={cn(className, styles.listBox)}
      styles={style}
      value={selectedOption}
      // TODO: пофиксить тип
      onChange={handleChange}
      options={options}
      placeholder='Категория'
    />
  );
};

export default SelectComp;
