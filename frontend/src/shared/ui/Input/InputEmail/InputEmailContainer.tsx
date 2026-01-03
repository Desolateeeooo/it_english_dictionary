import type { ChangeEvent } from 'react';
import InputEmailPresentational from './InputEmailPresentational';

export interface InputEmailProps {
  value: string;
  isSubmitting: boolean;
  loading: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function InputEmailContainer({ value, isSubmitting, loading, handleChange }: InputEmailProps) {
  return (
    <InputEmailPresentational
      value={value}
      isSubmitting={isSubmitting}
      loading={loading}
      handleChange={handleChange}
    />
  );
}

export default InputEmailContainer;
