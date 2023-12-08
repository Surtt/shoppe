import {
  DetailedHTMLProps,
  Dispatch,
  LabelHTMLAttributes,
  SetStateAction,
} from 'react';

export interface SwitchProps
  extends DetailedHTMLProps<
    LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {
  switchState: boolean;
  onSwitch: Dispatch<SetStateAction<boolean>>;
}
