import styles from './InputPassword.module.css';
import { Lock } from 'lucide-react';
import InputWrapper from '../InputWrapper';
import type { InputPasswordProps } from './InputPasswordContainer';

interface InputPasswordProps2 extends InputPasswordProps {
  showPassword: boolean;
  inputType: string;
  onClickHandler: () => void;
}

function InputPasswordPresentational({
  showPassword,
  inputType,
  onClickHandler,
  value,
  isSubmitting,
  loading,
  handleChange,
}: InputPasswordProps2) {
  return (
    <InputWrapper>
      <input
        type={inputType}
        id="password"
        name="password"
        value={value}
        onChange={handleChange}
        placeholder="Password"
        className={styles.input_field}
        required
        disabled={isSubmitting || loading}
      />
      <Lock className={styles.input_icon} size={20} />
      <button type="button" className={styles.password_toggle} onClick={onClickHandler}>
        {showPassword ? 'HIDE' : 'SHOW'}
      </button>
    </InputWrapper>
  );
}

export default InputPasswordPresentational;
