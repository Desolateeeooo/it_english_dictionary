import SignInButtonsPresentational from "./SignInButtonsPresentational";

interface ISignInButtons {
	link: string;
	linkTitle: string;
	linkButtonText: string;
	helperButtonText: string;
}

function SignInButtonsContainer({ link, linkTitle, linkButtonText, helperButtonText }: ISignInButtons) {
	return <SignInButtonsPresentational
		link={link}
		linkTitle={linkTitle}
		linkButtonText={linkButtonText}
		helperButtonText={helperButtonText} />;
}

export default SignInButtonsContainer;