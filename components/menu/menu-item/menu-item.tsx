import React from 'react';
import Link from 'next/link';
import cn from 'classnames';
import { MenuItemProps } from '@/components/menu/menu-item/menu-item.props';
import styles from './menu-item.module.css';

export const MenuItem = ({ name, to, className, ...props }: MenuItemProps) => {
  return (
    <li {...props} className={cn(className, styles.item)}>
      <Link href={to}>{name}</Link>
    </li>
  );
};
