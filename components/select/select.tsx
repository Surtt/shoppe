'use client';

import React from 'react';
import { SelectProps } from './select.props';
import { useState } from 'react';
import styles from './select.module.css';
import cn from 'classnames';

import Select, { StylesConfig } from 'react-select';

type OptionType = {
  value: string;
  label: string;
};

const options: OptionType[] = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

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

const SelectComp = ({ className, ...props }: SelectProps) => {
  const [selectedOption, setSelectedOption] = useState<
    OptionType | unknown | null
  >(null);
  const handleChange = (option: OptionType | null | unknown) => {
    setSelectedOption(option);
  };
  return (
    <Select
      {...props}
      className={cn(className, styles.listBox)}
      styles={style}
      defaultValue={selectedOption}
      onChange={(option) => handleChange(option)}
      options={options}
      placeholder='Категория'
    />
  );
};

export default SelectComp;
