import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';
import { InputProps } from './input.props';
import styles from './input.module.css';

// eslint-disable-next-line react/display-name
const Input = forwardRef(
  (
    { variant, error, className, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <div className={cn(className, styles.inputWrapper)}>
        <input
          {...props}
          ref={ref}
          className={cn(styles.input, {
            [styles.subscribeInput]: variant,
            [styles.mainInput]: !variant,
            [styles.error]: error,
          })}
        />
        {error && (
          <span role='alert' className={styles.errorMessage}>
            {error?.message}
          </span>
        )}
      </div>
    );
  },
);

export default Input;
