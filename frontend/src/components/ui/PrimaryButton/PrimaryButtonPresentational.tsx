import styles from "./PrimaryButton.module.css";

interface IPrimaryButton {
	text: string;
}

function PrimaryButtonPresentational({text}: IPrimaryButton) {
	return (
		<button className={styles.primary_btn}>{text}</button>
	);
}

export default PrimaryButtonPresentational;