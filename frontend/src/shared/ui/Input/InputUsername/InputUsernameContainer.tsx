import type { ChangeEvent } from 'react';
import InputUsernamePresentational from './InputUsernamePresentational';

export interface InputUsernameProps {
  value: string | undefined;
  isSubmitting: boolean;
  loading: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function InputUsernameContainer({
  value,
  isSubmitting,
  loading,
  handleChange,
}: InputUsernameProps) {
  return (
    <InputUsernamePresentational
      value={value}
      isSubmitting={isSubmitting}
      loading={loading}
      handleChange={handleChange}
    />
  );
}

export default InputUsernameContainer;
