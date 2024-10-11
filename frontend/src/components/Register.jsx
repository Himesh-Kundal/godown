import { useState } from 'react';
import axios from 'axios';
const bcknd = import.meta.env.VITE_BACKEND_URL;

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    console.log(bcknd);
    e.preventDefault();
    try {
      const response = await axios.post(`${bcknd}/api/auth/register`, {
        email,
        password
      });
      console.log(response);
      alert('Registrationn successful!');
    } catch (error) {
      alert('Error Registering: ' + (error.response?.data?.message || error.message));
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

export default Register;
