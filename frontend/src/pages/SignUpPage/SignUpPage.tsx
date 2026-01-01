import { SignUpForm } from '../../features/auth';
import { LoginWhiteCard, MainContainer } from '../../shared/ui';

function SignUpPage() {
  return (
    <MainContainer style={{ backgroundImage: 'var(--cream-gradient)', padding: 20 }}>
      <LoginWhiteCard>
        <SignUpForm />
      </LoginWhiteCard>
    </MainContainer>
  );
}

export default SignUpPage;
