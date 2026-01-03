import AuthButtonsPresentational from './AuthButtonsPresentational';

export interface AuthButtonsProps {
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

function AuthButtonsContainer({
  link,
  linkTitle,
  linkButtonText,
  helperButtonText,
  primaryButtonText,
  formData,
  isSubmitting,
  loading,
}: AuthButtonsProps) {
  return (
    <AuthButtonsPresentational
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

export default AuthButtonsContainer;
