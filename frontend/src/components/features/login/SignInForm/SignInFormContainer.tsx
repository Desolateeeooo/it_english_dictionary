import { useState, type ChangeEvent, type FormEvent } from 'react';
import SignInFormPresentational from './SignInFormPresentational';
import { useAuth } from '../../../../hooks/useAuth';

function SignInFormContainer() {
  const { login, loading } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (error) setError('');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log('🎯 Form submitted!', formData); // Add this
    setIsSubmitting(true);
    setError('');

    try {
      await login(formData.email, formData.password);
      console.log('Login successfull!');
    } catch (err: any) {
      setError(err.message || 'Login failed.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SignInFormPresentational
      formData={formData}
      isSubmitting={isSubmitting}
      loading={loading}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      error={error}
    />
  );
}

export default SignInFormContainer;
