import cn from 'classnames';
import { CustomDotProps } from './custom-dot.props';
import styles from './custom-dot.module.css';

const CustomDot = ({ onClick, ...rest }: CustomDotProps) => {
  const { active } = rest;
  return (
    <div className={styles.buttonWrapper}>
      <button
        className={cn({
          [styles.active]: active,
          [styles.inactive]: !active,
        })}
        onClick={() => onClick()}
      ></button>
    </div>
  );
};

export default CustomDot;
