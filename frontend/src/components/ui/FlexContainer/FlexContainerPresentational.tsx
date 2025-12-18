import type { ReactNode, CSSProperties } from 'react';
import styles from './FlexContainer.module.css';

interface IFlexContainer {
  children: ReactNode;
  style?: CSSProperties;
}

function FlexContainerPresentational({ children, style }: IFlexContainer) {
  return (
    <div className={styles.flex_container} style={style}>
      {children}
    </div>
  );
}

export default FlexContainerPresentational;
