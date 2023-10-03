'use client';

import React from 'react';
import cn from 'classnames';
import { useState } from 'react';
import { SwitchProps } from './switch.props';
import styles from './switch.module.css';

const Switch = ({ className, ...props }: SwitchProps) => {
  const [switchState, setSwitchState] = useState<boolean>(false);

  const handleOnChange = () => {
    setSwitchState(!switchState);
  };
  return (
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
  );
};

export default Switch;
