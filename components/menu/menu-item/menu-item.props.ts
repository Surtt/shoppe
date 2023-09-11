import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface MenuItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  name: string;
  to: string;
}
