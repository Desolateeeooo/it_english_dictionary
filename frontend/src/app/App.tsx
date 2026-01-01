import { AuthProvider } from './providers/AuthProvider';
import AppRouter from './Router';

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
