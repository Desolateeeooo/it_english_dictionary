import styles from "./SignInForm.module.css";
import { InputEmail, InputPassword } from "..";
import { FlexContainer, FormContainer } from "../../../ui";

function SignInFormPresentational() {
	return (
		<FormContainer header={"Sign in"}>
				<InputEmail />
				<InputPassword />
				<FlexContainer>
					<div className={styles.flex_container} style={{ justifyContent: "flex-start", marginTop: 0 }}>
						<input type="checkbox" name="sign-in-remember-me" />
						<label htmlFor="sign-in-remember-me">Remember me</label>
					</div>
					<button className={styles.btn_forgot_password}>Forgot password?</button>
				</FlexContainer>
		</FormContainer>
	);
}

export default SignInFormPresentational;