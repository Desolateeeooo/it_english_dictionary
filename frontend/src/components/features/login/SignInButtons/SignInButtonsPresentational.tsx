import { FlexContainer, PrimaryButton } from "../../../ui";
import styles from "./SignInButtons.module.css";

function SignInButtonsPresentational() {
	return (
		<section className={styles.sign_in_btns}>
			<PrimaryButton text={"Sign in"}/>
			<FlexContainer style={{ gap: 20 }}>
				<hr />
				<p>or</p>
				<hr />
			</FlexContainer>
			<button className={styles.secondary_btn}>Sign in with the other</button>
			<FlexContainer style={{ justifyContent: "flex-start" }} >
				<button className={styles.btn_dont_have_acc}>Don't have an account?</button>
				<button className={styles.btn_sign_up}>Sign up</button>
			</FlexContainer>
		</section >
	);
}

export default SignInButtonsPresentational;