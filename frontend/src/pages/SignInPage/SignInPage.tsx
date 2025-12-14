import { SignInForm } from "../../components/features/login";
import { FlexContainer } from "../../components/layout";
import styles from "./SignInPage.module.css";

function SignInPage() {
	return (
		<FlexContainer style={{backgroundImage: "var(--cream-gradient)", padding: 20 }}>
			<main className={styles.main}>
				<SignInForm />
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