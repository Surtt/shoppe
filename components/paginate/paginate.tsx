'use client';

import Pagination from 'rc-pagination';
import { PaginateProps } from './paginate.props';

const Paginate = ({ className, total, onChange, ...props }: PaginateProps) => {
  return (
    <Pagination
      {...props}
      className={className}
      showTitle={false}
      total={total}
      hideOnSinglePage
    />
  );
};

export default Paginate;
