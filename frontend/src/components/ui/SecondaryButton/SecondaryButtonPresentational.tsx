import styles from './SecondaryButton.module.css';

interface ISecondaryButton {
  text: string;
}

function SecondaryButtonPresentational({ text }: ISecondaryButton) {
  return <button className={styles.secondary_btn}>{text}</button>;
}

export default SecondaryButtonPresentational;
