import SignInButtonsPresentational from './SignInButtonsPresentational';

export interface SignInButtonsProps {
  link: string;
  linkTitle: string;
  linkButtonText: string;
  helperButtonText: string;
  primaryButtonText: string;
  formData: {
    email: string;
    password: string;
  };
  isSubmitting: boolean;
  loading: boolean;
}

function SignInButtonsContainer({
  link,
  linkTitle,
  linkButtonText,
  helperButtonText,
  primaryButtonText,
	formData,
	isSubmitting,
	loading
}: SignInButtonsProps) {
  return (
    <SignInButtonsPresentational
      link={link}
      linkTitle={linkTitle}
      linkButtonText={linkButtonText}
      helperButtonText={helperButtonText}
      primaryButtonText={primaryButtonText}
			formData={formData}
			isSubmitting={isSubmitting}
			loading={loading}
    />
  );
}

export default SignInButtonsContainer;
