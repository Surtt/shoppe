import cn from 'classnames';
import { TitleProps } from './title.props';
import styles from './title.module.css';

const Title = ({ tag, children, className, ...props }: TitleProps) => {
  switch (tag) {
    case 'h1':
      return (
        <h1 {...props} className={cn(className, styles.h1)}>
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2 {...props} className={cn(className, styles.h2)}>
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3 {...props} className={cn(className, styles.h3)}>
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4 {...props} className={cn(className, styles.h4)}>
          {children}
        </h4>
      );
    case 'h5':
      return (
        <h5 {...props} className={cn(className, styles.h5)}>
          {children}
        </h5>
      );
  }
};

export default Title;
