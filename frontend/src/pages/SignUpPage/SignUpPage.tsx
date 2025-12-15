import { LoginWhiteCard, MainContainer } from "../../components/ui";

function SignUpPage() {
	return (
		<MainContainer style={{ backgroundImage: "var(--cream-gradient)", padding: 20 }}>
			<LoginWhiteCard>
				<h1>Sign Up</h1>
			</LoginWhiteCard>
		</MainContainer>
	);
}

export default SignUpPage;