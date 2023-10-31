import {
  DetailedHTMLProps,
  Dispatch,
  HTMLAttributes,
  SetStateAction,
} from 'react';
import { SelectOption } from '@/types/select-option';

export interface SelectProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  selectedOption: SelectOption | null;
  onSelectOption: Dispatch<SetStateAction<SelectOption | null>>;
  options: SelectOption[];
}
