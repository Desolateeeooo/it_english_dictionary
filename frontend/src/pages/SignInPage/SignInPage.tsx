import { SignInButtons, SignInForm } from "../../components/features/login";
import { LoginWhiteCard, MainContainer } from "../../components/ui";

function SignInPage() {
	return (
		<MainContainer style={{ backgroundImage: "var(--cream-gradient)", padding: 20 }}>
			<LoginWhiteCard>
				<SignInForm />
				<SignInButtons
					link="/signup"
					linkTitle="Sign Up"
					linkButtonText="Sign up"
					helperButtonText="Don't have an account?"
					primaryButtonText="Sign in" />
			</LoginWhiteCard>
		</MainContainer>
	);
}

export default SignInPage;