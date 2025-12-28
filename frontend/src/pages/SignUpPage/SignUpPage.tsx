import { SignUpForm } from '../../components/features/login';
import { LoginWhiteCard, MainContainer } from '../../components/ui';

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
