import { useState, type ChangeEvent, type FormEvent } from 'react';
import SignFormPresentational from './SignFormPresentational';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../lib';

function SignUpFormContainer() {
  const { loading, register } = useAuth();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

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
      await register(formData.username, formData.email, formData.password);
      console.log('Registration successful!');
      navigate('/profile');
    } catch (err: any) {
      setError(err.message || 'Login failed.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SignFormPresentational
      type="signup"
      formData={formData}
      isSubmitting={isSubmitting}
      loading={loading}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      error={error}
    />
  );
}

export default SignUpFormContainer;
