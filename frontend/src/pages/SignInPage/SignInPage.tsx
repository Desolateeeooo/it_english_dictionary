import { Navigate } from 'react-router-dom';
import { SignInForm } from '../../features/auth';
import { LoginWhiteCard, MainContainer } from '../../shared/ui';
import { useAuth } from '../../features/auth';

function SignInPage() {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/profile" replace />;
  }

  return (
    <MainContainer style={{ backgroundImage: 'var(--cream-gradient)', padding: 20 }}>
      <LoginWhiteCard>
        <SignInForm />
      </LoginWhiteCard>
    </MainContainer>
  );
}

export default SignInPage;
