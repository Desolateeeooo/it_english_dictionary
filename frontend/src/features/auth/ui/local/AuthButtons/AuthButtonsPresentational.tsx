import { Link } from 'react-router-dom';
import { SocialLoginButtons } from '../../oauth';
import { PrimaryButton, FlexContainer } from '../../../../../shared/ui';
import type { AuthButtonsProps } from './AuthButtonsContainer';
import styles from './AuthButtons.module.css';

function AuthButtonsPresentational({
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

export default AuthButtonsPresentational;
