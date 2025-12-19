import { SignInForm } from '../../components/features/login';
import { LoginWhiteCard, MainContainer } from '../../components/ui';
import { AuthProvider } from '../../contexts/AuthContext';

function SignInPage() {
  return (
    <AuthProvider>
      <MainContainer style={{ backgroundImage: 'var(--cream-gradient)', padding: 20 }}>
        <LoginWhiteCard>
          <SignInForm />
        </LoginWhiteCard>
      </MainContainer>
    </AuthProvider>
  );
}

export default SignInPage;
