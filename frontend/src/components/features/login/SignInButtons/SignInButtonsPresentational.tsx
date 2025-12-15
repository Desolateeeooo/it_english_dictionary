import { Link } from "react-router-dom";
import { FlexContainer, PrimaryButton, SecondaryButton } from "../../../ui";
import styles from "./SignInButtons.module.css";

function SignInButtonsPresentational() {
	return (
		<section className={styles.sign_in_btns}>
			<PrimaryButton text={"Sign in"} />
			<FlexContainer style={{ gap: 20 }}>
				<hr />
				<p>or</p>
				<hr />
			</FlexContainer>
			<SecondaryButton text={"Sign in with the other"} />
			<FlexContainer style={{ justifyContent: "flex-start" }} >
				<button className={styles.btn_dont_have_acc}>Don't have an account?</button>
				<Link to="/signup" title="Sign up">
					<button className={styles.btn_sign_up}>Sign up</button>
				</Link>
			</FlexContainer>
		</section >
	);
}

export default SignInButtonsPresentational;