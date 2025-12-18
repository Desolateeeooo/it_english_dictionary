import SignInButtonsPresentational from './SignInButtonsPresentational';

interface ISignInButtons {
  link: string;
  linkTitle: string;
  linkButtonText: string;
  helperButtonText: string;
  primaryButtonText: string;
}

function SignInButtonsContainer({
  link,
  linkTitle,
  linkButtonText,
  helperButtonText,
  primaryButtonText,
}: ISignInButtons) {
  return (
    <SignInButtonsPresentational
      link={link}
      linkTitle={linkTitle}
      linkButtonText={linkButtonText}
      helperButtonText={helperButtonText}
      primaryButtonText={primaryButtonText}
    />
  );
}

export default SignInButtonsContainer;
