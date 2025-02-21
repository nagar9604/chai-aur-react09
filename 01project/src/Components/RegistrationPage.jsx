import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegistrationPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!username || !email || !password || !confirmPassword) {
      setError('All fields are required!');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    setError('');
    setLoading(true);

    // Simulating registration
    setTimeout(() => {
      if (email === 'user@example.com') {
        setError('Email already registered!');
        setLoading(false);
      } else {
        alert('Registration successful!');
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setLoading(false);
      }
    }, 1500);
  };

  return (
    <div className="center-container">
    <div 
      className="container-fluid d-flex justify-content-center align-items-center" 
      style={{ 
        height: '30%', 
        
        backgroundImage: 'url("https://img.freepik.com/free-photo/volume-abstract-graphic-loneliness-desk_1258-258.jpg?ga=GA1.1.789058358.1740063125&semt=ais_hybrid")',
        backgroundSize: 'cover',
        backdropFilter:'blur(110vh)',
        zIndex:-1, 
        display: 'flex', 
        flexDirection: 'column' 
      }}
    >
      <div className="card p-4 shadow" style={{ width: '400px', borderRadius: '10px', backgroundColor: 'rgba(300, 300, 300, 0.4)' }}>
        <h2 className="text-center mb-4" style={{ color: 'black' }}>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label" style={{ color: 'black' }}>Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              style={{ borderColor: 'black', borderRadius: '8px' }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label" style={{ color: 'black' }}>Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              style={{ borderColor: 'black', borderRadius: '8px' }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label" style={{ color: 'black' }}>Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              style={{ borderColor: 'black', borderRadius: '8px' }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label" style={{ color: 'black' }}>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              style={{ borderColor: 'black', borderRadius: '8px' }}
            />
          </div>

          {error && <div className="alert alert-danger">{error}</div>}

          <div className="d-grid">
            <button type="submit" className="btn btn-primary" disabled={loading} style={{ backgroundColor: 'gray', borderColor:"black",borderRadius: '8px' }}>
              {loading ? 'Registering...' : 'Register'}
            </button>
          </div>
        </form>

        <div className="text-center mt-3">
          <p>Already have an account? <Link to="/login" style={{ color: 'light-blue' }}>Login here</Link></p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default RegistrationPage;
