import { InputEmail, InputPassword, InputUsername, SignInButtons } from "../../components/features/login";
import { FormContainer, LoginWhiteCard, MainContainer } from "../../components/ui";

function SignUpPage() {
	return (
		<MainContainer style={{ backgroundImage: "var(--cream-gradient)", padding: 20 }}>
			<LoginWhiteCard>
				<FormContainer header={"Sign up"}>
					<InputUsername />
					<InputPassword />
					<InputEmail />
				</FormContainer>
				<SignInButtons
					link="/signin"
					linkTitle="Sign In"
					linkButtonText="Sign in"
					helperButtonText="Already have an account?" />
			</LoginWhiteCard>
		</MainContainer>
	);
}

export default SignUpPage;