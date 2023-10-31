'use client';

import React from 'react';
import cn from 'classnames';
import { SwitchProps } from './switch.props';
import styles from './switch.module.css';

const Switch = ({
  switchState,
  onSwitch,
  className,
  ...props
}: SwitchProps) => {
  const handleOnChange = () => {
    onSwitch(!switchState);
  };
  return (
    <div className={styles.switchWrapper}>
      <p>Со скидкой</p>
      <label
        {...props}
        className={cn(className, styles.label, {
          [styles.activeBg]: switchState,
        })}
        htmlFor='checkbox'
      >
        <input
          id='checkbox'
          checked={switchState}
          onChange={handleOnChange}
          type='checkbox'
        />
        <div
          className={styles.round}
          style={switchState ? { left: 'calc(55% - 2px)' } : { left: '2px' }}
        ></div>
      </label>
    </div>
  );
};

export default Switch;
