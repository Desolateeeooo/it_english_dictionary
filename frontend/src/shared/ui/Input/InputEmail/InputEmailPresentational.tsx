import { Mail } from 'lucide-react';
import styles from './InputEmail.module.css';
import type { InputEmailProps } from './InputEmailContainer';
import InputWrapper from '../InputWrapper';

function InputEmailPresentational({ value, isSubmitting, loading, handleChange }: InputEmailProps) {
  return (
    <InputWrapper>
      <input
        type="email"
        id="email"
        name="email"
        value={value}
        onChange={handleChange}
        placeholder="Email"
        className={styles.input_field}
        required
        disabled={isSubmitting || loading}
      />
      <Mail className={styles.input_icon} size={20} />
    </InputWrapper>
  );
}

export default InputEmailPresentational;
