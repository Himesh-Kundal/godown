import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Access the backend URL from the environment variable
const bcknd = import.meta.env.VITE_BACKEND_URL;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Backend URL:', bcknd); // Debugging purpose

    try {
      // Send a POST request to the backend for login
      const response = await axios.post(`${bcknd}/api/auth/login`, {
        email,
        password
      });

      // Save the JWT token in localStorage
      localStorage.setItem('token', response.data.token);

      // Optionally navigate to a protected page (e.g., dashboard) after login
      alert('Login successful!');
      navigate('/dashboard');  // Redirect to dashboard after successful login
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Login failed: ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
