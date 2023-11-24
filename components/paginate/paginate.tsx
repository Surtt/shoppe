'use client';

import cn from 'classnames';
import Pagination from 'rc-pagination';
import styles from './paginate.module.css';
import { PaginateProps } from './paginate.props';

const Paginate = ({ className, total, onChange, ...props }: PaginateProps) => {
  return (
    <Pagination
      {...props}
      className={cn(className, styles.paginate)}
      onChange={onChange}
      showTitle={false}
      total={total}
      hideOnSinglePage
    />
  );
};

export default Paginate;
