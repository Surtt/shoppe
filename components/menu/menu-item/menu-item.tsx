import cn from 'classnames';
import Link from 'next/link';
import React from 'react';
import { MenuItemProps } from '@/components/menu/menu-item/menu-item.props';
import styles from './menu-item.module.css';

const MenuItem = ({ icon, name, to, className, ...props }: MenuItemProps) => {
  return (
    <li {...props} className={cn(className, styles.item)}>
      {icon}
      <Link href={to}>{name}</Link>
    </li>
  );
};

export default MenuItem;
