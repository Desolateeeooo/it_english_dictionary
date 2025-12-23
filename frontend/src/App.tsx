import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Profile, SignIn, SignUp } from './pages';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
					<Route path="/profile" element={<Profile />}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
