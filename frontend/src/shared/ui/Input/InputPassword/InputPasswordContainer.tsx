import { useState, type ChangeEvent } from 'react';
import InputPasswordPresentational from './InputPasswordPresentational';

export interface InputPasswordProps {
  value: string;
  isSubmitting: boolean;
  loading: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function InputPasswordContainer({
  value,
  isSubmitting,
  loading,
  handleChange,
}: InputPasswordProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [inputType, setInputType] = useState('password');

  const onClickHandler = () => {
    setShowPassword(!showPassword);
    setInputType(inputType === 'password' ? 'text' : 'password');
  };

  return (
    <InputPasswordPresentational
      showPassword={showPassword}
      inputType={inputType}
      onClickHandler={onClickHandler}
      value={value}
      isSubmitting={isSubmitting}
      loading={loading}
      handleChange={handleChange}
    />
  );
}

export default InputPasswordContainer;
