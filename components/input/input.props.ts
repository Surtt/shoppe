import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react';
import { FieldError, UseFormClearErrors } from 'react-hook-form';

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  variant?: 'subscribe';
  icon?: ReactNode;
  error?: FieldError;
  clearErrors?: UseFormClearErrors<{ email: string }>;
}
