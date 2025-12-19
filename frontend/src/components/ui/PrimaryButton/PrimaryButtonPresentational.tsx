import styles from './PrimaryButton.module.css';
import type { PrimaryButtonProps } from './PrimaryButtonContainer';

function PrimaryButtonPresentational({ text, type, disabled }: PrimaryButtonProps) {
  return (
    <button
      type={type}
      className={styles.primary_btn}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default PrimaryButtonPresentational;
