import { Link } from 'react-router-dom';
import { FlexContainer, PrimaryButton } from '../../../ui';
import styles from './SignInButtons.module.css';
import { SocialLoginButtons } from '../../oauth';
import type { SignInButtonsProps } from './SignInButtonsContainer';

function SignInButtonsPresentational({
  link,
  linkTitle,
  linkButtonText,
  helperButtonText,
  primaryButtonText,
  formData,
  isSubmitting,
  loading,
}: SignInButtonsProps) {
  return (
    <section className={styles.sign_in_btns}>
      <PrimaryButton
        text={
          primaryButtonText === 'Sign in'
            ? isSubmitting
              ? 'Signing in...'
              : 'Sign In'
            : isSubmitting
              ? 'Signing up...'
              : 'Sign Up'
        }
        type="submit"
        disabled={isSubmitting || loading || !formData.email || !formData.password}
      />
      <FlexContainer style={{ gap: 20 }}>
        <hr />
        <p>or</p>
        <hr />
      </FlexContainer>
      <SocialLoginButtons />
      {/*<SecondaryButton text={"Sign in with the other"} /> */}
      <FlexContainer style={{ justifyContent: 'flex-start' }}>
        <Link to={link} title={linkTitle}>
          <button className={styles.btn_dont_have_acc}>{helperButtonText}</button>
        </Link>
        <Link to={link} title={linkTitle}>
          <button className={styles.btn_sign_up}>{linkButtonText}</button>
        </Link>
      </FlexContainer>
    </section>
  );
}

export default SignInButtonsPresentational;
