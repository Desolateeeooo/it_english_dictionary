import styles from "./SignInForm.module.css";
function SignInFormPresentational() {
	return (
		<section className={styles.sign_in_form}>
			<h2>Sign in</h2>
			<form action="">
				<input type="text" name="sign-in-login" placeholder="Username" />
				<input type="password" name="sign-in-password" placeholder="Password" />
				{/*<button className={styles.show_password_btn}>SHOW</button> */}
				<div className={styles.flex_container}>
					<div className={styles.flex_container} style={{ justifyContent: "flex-start", marginTop: 0 }}>
						<input type="checkbox" name="sign-in-remember-me" />
						<label htmlFor="sign-in-remember-me">Remember me</label>
					</div>
					<button className={styles.btn_forgot_password}>Forgot password?</button>
				</div>
			</form>
		</section>
	);
}

export default SignInFormPresentational;