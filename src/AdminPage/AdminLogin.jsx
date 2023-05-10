import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLogin({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const Navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === 'admin' && password === '0000') {
      localStorage.setItem('isLoggedIn', 'true');
      Navigate('/Admin')
      console.log(true);
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{padding: '5rem', textAlign: 'center'}}>
    <h4>Admin Login</h4>
      <label>
        Username:
        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
      </label><br/><br/>
      <label>
        Password:
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </label><br/><br/>
      <button type="submit">Login</button>
    </form>
  );
}
 export default AdminLogin