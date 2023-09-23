import cn from 'classnames';
import { SubscribeInputProps } from './subscribe-input.props';
import styles from './subscribe-input.module.css';
import ArrowIcon from '../../public/icons/arrow.svg';

export const SubscribeInput = ({
  className,
  ...props
}: SubscribeInputProps) => {
  return (
    <div {...props} className={cn(className, styles.inputWrapper)}>
      <input
        className={styles.subscribeInput}
        placeholder='Ваш email для акций и предложений'
      />
      <button className={styles.button}>
        <ArrowIcon className={styles.arrowIcon} />
      </button>
    </div>
  );
};
