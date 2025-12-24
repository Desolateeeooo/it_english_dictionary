import styles from './PrimaryButton.module.css';
import type { PrimaryButtonProps } from './PrimaryButtonContainer';

function PrimaryButtonPresentational({ text, type, disabled }: PrimaryButtonProps) {
  const logger = () => {
    console.log('The button has been clicked');
  };

  return (
    <button type={type} className={styles.primary_btn} onClick={logger} disabled={disabled}>
      {text}
    </button>
  );
}

export default PrimaryButtonPresentational;
