import cn from 'classnames';
import styles from './custom-dot.module.css';
import { CustomDotProps } from './custom-dot.props';

const CustomDot = ({ onClick, active }: CustomDotProps) => {
  return (
    <div className={styles.buttonWrapper}>
      <button
        className={cn({
          [styles.active]: active,
          [styles.inactive]: !active,
        })}
        onClick={onClick}
      ></button>
    </div>
  );
};

export default CustomDot;
