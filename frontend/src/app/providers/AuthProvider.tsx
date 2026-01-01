import axios from 'axios';
import { useEffect, useState, type ReactNode } from 'react';
import apiClient from '../../api/apiClient';
import { AuthContext, type User } from '../../features/auth';

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await apiClient.get('/auth/me');
      setUser(response.data.user);
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      console.log('Attempting login with:', { email });
      const response = await apiClient.post('/auth/login', {
        email,
        password,
      });

      console.log('Login response:', response.data);
      console.log('Response headers:', response.headers);

      setUser(response.data.user);

      setTimeout(async () => {
        console.log('Checking auth after login...');
        await checkAuth();
      }, 100);
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(error.response.data.error || 'Login failed.');
      }
      throw new Error('Network error.');
    }
  };

  const logout = async () => {
    try {
      await apiClient.post('/auth/logout');
      setUser(null);
    } catch (error) {
      console.log('Logout error:', error);
    }
  };

  const register = async (username: string, email: string, password: string) => {
    try {
      console.log('Attempting registration with:', { username, email });

      const response = await apiClient.post('/auth/register', {
        username,
        email,
        password,
      });

      console.log('Registration response:', response.data);

      await login(email, password);
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(error.response.data.error || 'Registration failed.');
      }
      throw new Error('Network error.');
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, checkAuth, register }}>
      {children}
    </AuthContext.Provider>
  );
};
