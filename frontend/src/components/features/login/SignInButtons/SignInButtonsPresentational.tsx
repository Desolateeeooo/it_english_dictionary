import styles from "./SignInButtons.module.css";

function SignInButtonsPresentational() {
	return (
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
	);
}

export default SignInButtonsPresentational;