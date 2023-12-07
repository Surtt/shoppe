import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export type TValue = {
  min: number;
  max: number;
};

export interface RangeProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  step: number;
  min: number;
  max: number;
  values: TValue;
  onChangeValue: ({ min, max }: TValue) => void;
}
