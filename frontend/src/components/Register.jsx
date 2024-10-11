import { useState } from 'react';
import axios from 'axios';

const bcknd = import.meta.env.VITE_BACKEND_URL;

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Backend URL:', bcknd);  // Debugging

    try {
      // Send a POST request to the backend to register the user
      const response = await axios.post(`${bcknd}/api/auth/register`, {
        email,
        password
      });

      console.log('Registration successful:', response.data);
      alert('Registration successful!');
    } catch (error) {
      console.error('Error registering:', error);
      alert('Error Registering: ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div>
      <h2>Register</h2>  {/* Fix the heading */}
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
        <button type="submit">Register</button>  {/* Fix the button text */}
      </form>
    </div>
  );
}

export default Register;
