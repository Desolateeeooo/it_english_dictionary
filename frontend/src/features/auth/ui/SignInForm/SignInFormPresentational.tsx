import styles from './SignInForm.module.css';
import { InputEmail, InputPassword, SignInButtons } from '..';
import { FlexContainer, FormContainer } from '../../../ui';
import type { ChangeEvent, FormEvent } from 'react';

interface SignInFormProps {
  formData: {
    email: string;
    password: string;
  };
  isSubmitting: boolean;
  loading: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent) => Promise<void>;
  error: string;
}

function SignInFormPresentational({
  formData,
  isSubmitting,
  loading,
  handleChange,
  handleSubmit,
  error,
}: SignInFormProps) {
  return (
    <>
      <FormContainer header={'Sign in'} handleSubmit={handleSubmit}>
        {error && <div className={styles.error}>{error}</div>}
        <InputEmail
          value={formData.email}
          handleChange={handleChange}
          isSubmitting={isSubmitting}
          loading={loading}
        />
        <InputPassword
          value={formData.password}
          isSubmitting={isSubmitting}
          loading={loading}
          handleChange={handleChange}
        />
        <FlexContainer>
          <div
            className={styles.flex_container}
            style={{ justifyContent: 'flex-start', marginTop: 0 }}
          >
            <input type="checkbox" name="sign-in-remember-me" />
            <label htmlFor="sign-in-remember-me">Remember me</label>
          </div>
          <button className={styles.btn_forgot_password}>Forgot password?</button>
        </FlexContainer>
      <SignInButtons
        link="/signup"
        linkTitle="Sign Up"
        linkButtonText="Sign up"
        helperButtonText="Don't have an account?"
        primaryButtonText="Sign in"
				isSubmitting={isSubmitting}
				loading={loading}
				formData={formData}
      />
      </FormContainer>
    </>
  );
}

export default SignInFormPresentational;
