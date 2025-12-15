import type { CSSProperties, ReactNode } from "react";
import styles from "./MainContainer.module.css";

interface IFlexContainer {
	children: ReactNode;
	style: CSSProperties;
}

function MainContainerPresentational({children, style}: IFlexContainer) {
	return (
		<div className={styles.container} style={style}>
			{children}
		</div>
	);
}

export default MainContainerPresentational;