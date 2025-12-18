import type { ReactNode } from 'react';
import styles from './InputWrapper.module.css';

interface IInputWrapper {
  children: ReactNode;
}

function InputWrapperPresentational({ children }: IInputWrapper) {
  return <div className={styles.input_wrapper}>{children}</div>;
}

export default InputWrapperPresentational;
