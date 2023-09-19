import { DetailedHTMLProps, HTMLAttributes, ReactElement } from 'react';

export interface MenuProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  items: {
    icon?: ReactElement;
    name: string;
    to: string;
  }[];
}
