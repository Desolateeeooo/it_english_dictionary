import type { ReactNode } from "react";
import styles from "./FormContainer.module.css";

interface IFormContainer {
	header: string;
	children: ReactNode;
}

function FormContainerPresentational({ header, children }: IFormContainer) {
	return (
		<section className={styles.sign_in_form}>
			<h2>{header}</h2>
			{children}
		</section>
	);
}

export default FormContainerPresentational;