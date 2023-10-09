import { DetailedHTMLProps, HTMLAttributes, ReactElement } from 'react';

export interface MenuProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  items: {
    icon?: ReactElement;
    name: string;
    to: string;
  }[];
}
