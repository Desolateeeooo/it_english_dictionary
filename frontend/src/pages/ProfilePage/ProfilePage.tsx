import { ProtectedRoute } from '../../shared';
import { useAuth } from '../../features/auth';

function ProfilePage() {
  const { user, logout } = useAuth();

  return (
    <ProtectedRoute>
      <div>
        <h1>Welcome, {user?.username}!</h1>
        <p>Email: {user?.email}</p>
        <button onClick={logout}>Logout</button>
      </div>
    </ProtectedRoute>
  );
}

export default ProfilePage;
