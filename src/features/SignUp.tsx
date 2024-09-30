import { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = async (event: any) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://dummyjson.com/auth/register', {
        username,
        password,
        email
      });

      // Simulate storing the auth token
      localStorage.setItem('authToken', response.data.token);

      // Redirect or show a success message
      alert('Registration successful!');
    } catch (error) {
      console.error('Error registering', error);
      alert('Registration failed');
    }
  };

  return (
    <div>
      <h2>Sign up</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default SignUp;
