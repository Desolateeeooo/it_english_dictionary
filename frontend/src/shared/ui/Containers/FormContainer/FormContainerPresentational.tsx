import type { FormEvent, ReactNode } from 'react';
import styles from './FormContainer.module.css';

interface FormContainerProps {
  header: string;
  children: ReactNode;
  handleSubmit: (e: FormEvent) => Promise<void>;
}

function FormContainerPresentational({ header, children, handleSubmit }: FormContainerProps) {
  return (
    <section className={styles.sign_in_form}>
      <h2>{header}</h2>
      <form onSubmit={handleSubmit}>{children}</form>
    </section>
  );
}

export default FormContainerPresentational;
