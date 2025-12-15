import styles from "./SignInForm.module.css";
import { InputPassword, InputUsername } from "..";
import { FlexContainer } from "../../../ui";

function SignInFormPresentational() {
	return (
		<section className={styles.sign_in_form}>
			<h2>Sign in</h2>
			<form action="">
				<InputUsername />
				<InputPassword />
				<FlexContainer>
					<div className={styles.flex_container} style={{ justifyContent: "flex-start", marginTop: 0 }}>
						<input type="checkbox" name="sign-in-remember-me" />
						<label htmlFor="sign-in-remember-me">Remember me</label>
					</div>
					<button className={styles.btn_forgot_password}>Forgot password?</button>
				</FlexContainer>
			</form>
		</section>
	);
}

export default SignInFormPresentational;