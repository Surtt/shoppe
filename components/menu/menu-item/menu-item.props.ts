import { DetailedHTMLProps, HTMLAttributes, ReactElement } from 'react';

export interface MenuItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  icon?: ReactElement;
  name: string;
  to: string;
}
