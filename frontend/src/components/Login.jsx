import { useState } from 'react';
import axios from 'axios';
const bcknd = import.meta.env.VITE_BACKEND_URL;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    console.log(bcknd);
    e.preventDefault();
    try {
      const response = await axios.post(`${bcknd}/api/auth/login`, {
        email,
        password
      });
      if (!response.data.token) {
        throw new Error('Error logging in');
      }
      localStorage.setItem('token', response.data.token);
      alert('Login successful!');
    } catch (error) {
      alert('Error logging in: ' + (error.response?.data?.message || error.message));
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
