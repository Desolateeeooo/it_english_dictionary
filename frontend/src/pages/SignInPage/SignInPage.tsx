import { FlexContainer } from "../../components/layout";
import styles from "./SignInPage.module.css";

function SignInPage() {
	return (
		<FlexContainer style={{backgroundImage: "var(--cream-gradient)", padding: 20, }}>
			<main className={styles.main}>
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
				<section className={styles.sign_in_btns}>
					<button className={styles.primary_btn}>Sign in</button>
					<div className={styles.flex_container} style={{ gap: 20 }}>
						<hr />
						<p>or</p>
						<hr />
					</div>
					<button className={styles.secondary_btn}>Sign in with the other</button>
					<div className={styles.flex_container} style={{ justifyContent: "flex-start" }}>
						<button className={styles.btn_dont_have_acc}>Don't have an account?</button>
						<button className={styles.btn_sign_up}>Sign up</button>
					</div>
				</section>
			</main>
		</FlexContainer>
	);
}

export default SignInPage;