import { User } from 'lucide-react';
import styles from './InputUsername.module.css';
import InputWrapper from '../InputWrapper';
import type { InputUsernameProps } from './InputUsernameContainer';

function InputUsernamePresentational({
  value,
  isSubmitting,
  loading,
  handleChange,
}: InputUsernameProps) {
  return (
    <InputWrapper>
      <input
        type="text"
        id="username"
        name="username"
        value={value}
        onChange={handleChange}
        placeholder="Username"
        className={styles.input_field}
        required
        disabled={isSubmitting || loading}
      />
      <User className={styles.input_icon} size={20} />
    </InputWrapper>
  );
}

export default InputUsernamePresentational;
