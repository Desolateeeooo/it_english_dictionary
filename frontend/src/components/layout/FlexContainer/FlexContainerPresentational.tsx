import type { CSSProperties, ReactNode } from "react";
import styles from "./FlexContainer.module.css";

interface IFlexContainer {
	children: ReactNode;
	style: CSSProperties;
}

function FlexContainerPresentational({children, style}: IFlexContainer) {
	return (
		<div className={styles.container} style={style}>
			{children}
		</div>
	);
}

export default FlexContainerPresentational;