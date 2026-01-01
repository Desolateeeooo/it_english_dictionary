import { Home } from 'lucide-react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignIn, SignUp, Profile } from '../pages';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
