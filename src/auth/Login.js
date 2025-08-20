import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css'; 
import axios from 'axios';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
   

try {
  const res = await axios.post(
    `${process.env.REACT_APP_API_BASE_URL}/api/auth/login`,
    {
      email,
      password,
    },
    {
      headers: { 'Content-Type': 'application/json' },
    }
  );

  const data = res.data;
  console.log('data', data.district);

  // Store user info in localStorage
  localStorage.setItem('token', data.token);
  localStorage.setItem('district', data.district);
  localStorage.setItem('role', data.role);
  localStorage.setItem('state', data.state);

  // Navigate to district page
  navigate('/district');
} catch (error) {
  console.error('Login error:', error);

  const message =
    error.response?.data?.message || 'Login failed. Please try again.';

  alert(message);
}

  };

  return (
    <div className={styles.mainContainer}>
    <div className={styles.loginContainer}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <a href="/">Register</a>
      </p>
    </div>
    </div>
  );
};

export default Login;
