import type { ReactNode } from 'react';
import styles from './InputWrapper.module.css';

interface InputWrapperProps {
  children: ReactNode;
}

function InputWrapperPresentational({ children }: InputWrapperProps) {
  return <div className={styles.input_wrapper}>{children}</div>;
}

export default InputWrapperPresentational;
