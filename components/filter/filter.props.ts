import { Dispatch, SetStateAction } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { SelectOption } from '@/types/select-option';

export interface FilterProps {
  register: UseFormRegister<{ search: string }>;
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
