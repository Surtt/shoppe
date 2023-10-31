'use client';

import cn from 'classnames';
import { ChangeEvent, useEffect, useState } from 'react';
import { RangeProps } from './range.props';
import styles from './range.module.css';

const Range = ({
  className,
  step,
  min,
  max,
  values,
  onChangeValue,
  ...props
}: RangeProps) => {
  const [minValue, setMinValue] = useState(values ? values.min : min);
  const [maxValue, setMaxValue] = useState(values ? values.max : max);

  const handleMinChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newMinVal = Math.min(+e.target.value, maxValue - step);
    if (!values) setMinValue(newMinVal);
    onChangeValue({ min: newMinVal, max: maxValue });
  };

  const handleMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newMaxVal = Math.max(+e.target.value, minValue + step);
    if (!values) setMaxValue(newMaxVal);
    onChangeValue({ min: minValue, max: newMaxVal });
  };

  const minPos = Math.round(((minValue - min) / (max - min)) * 100);
  const maxPos = Math.round(((maxValue - min) / (max - min)) * 100);

  useEffect(() => {
    if (values) {
      setMinValue(values.min);
      setMaxValue(values.max);
    }
  }, [values]);

  return (
    <div className={styles.rangeWrapper}>
      <div {...props} className={cn(className, styles.wrapper)}>
        <div className={styles.inputWrapper}>
          <input
            className={styles.input}
            type='range'
            value={minValue}
            min={min}
            max={max}
            step={step}
            onChange={handleMinChange}
          />
          <input
            className={styles.input}
            type='range'
            value={maxValue}
            min={min}
            max={max}
            step={step}
            onChange={handleMaxChange}
          />
        </div>

        <div className={styles.controlWrapper}>
          <div className={styles.control} style={{ left: `${minPos}%` }} />
          <div className={styles.rail}>
            <div
              className={styles.innerRail}
              style={{ left: `${minPos}%`, right: `${100 - maxPos}%` }}
            />
          </div>
          <div className={styles.control} style={{ left: `${maxPos}%` }} />
        </div>
      </div>
      <p className={styles.price}>
        Цена: ${values.min} - ${values.max}
      </p>
    </div>
  );
};

export default Range;
