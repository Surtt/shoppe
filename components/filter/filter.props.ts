import { Dispatch, SetStateAction } from 'react';
import { SelectOption } from '@/types/select-option';

export interface FilterProps {
  selectedOption: SelectOption | null;
  onSelectOption: Dispatch<SetStateAction<SelectOption | null>>;
  selectOptions: SelectOption[];
  rangeValues: { min: number | undefined; max: number | undefined };
  onRangeValues: ({ min, max }: { min: number; max: number }) => void;
  minPrice: number;
  maxPrice: number;
  switchState: boolean;
  onSwitch: Dispatch<SetStateAction<boolean>>;
}
