import { SignInButtons, SignInForm } from "../../components/features/login";
import { FlexContainer } from "../../components/layout";
import styles from "./SignInPage.module.css";

function SignInPage() {
	return (
		<FlexContainer style={{backgroundImage: "var(--cream-gradient)", padding: 20 }}>
			<main className={styles.main}>
				<SignInForm />
				<SignInButtons />
			</main>
		</FlexContainer>
	);
}

export default SignInPage;