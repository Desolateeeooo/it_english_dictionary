import type { CSSProperties, ReactNode } from 'react';
import styles from './LoginWhiteCard.module.css';

interface ILoginWhiteCard {
  children: ReactNode;
  style?: CSSProperties;
}

function LoginWhiteCardPresentational({ children }: ILoginWhiteCard) {
  return <main className={styles.main}>{children}</main>;
}

export default LoginWhiteCardPresentational;
