import { SignInButtons, SignInForm } from "../../components/features/login";
import { MainContainer } from "../../components/layout";
import styles from "./SignInPage.module.css";

function SignInPage() {
	return (
		<MainContainer style={{backgroundImage: "var(--cream-gradient)", padding: 20 }}>
			<main className={styles.main}>
				<SignInForm />
				<SignInButtons />
			</main>
		</MainContainer>
	);
}

export default SignInPage;