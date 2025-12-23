import { Navigate } from 'react-router-dom';
import { SignInForm } from '../../components/features/login';
import { LoginWhiteCard, MainContainer } from '../../components/ui';
import { useAuth } from '../../hooks/useAuth';

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
