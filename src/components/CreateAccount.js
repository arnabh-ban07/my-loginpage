import React, { useState } from 'react';

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate an API call
    setTimeout(() => {
      setMessage('Account created successfully!');
    }, 1000);
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className='form-container'>
        <h2>Create Account</h2>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            id="username"
            name="username"
            placeholder='Username'
            value={formData.username}
            onChange={handleChange}
            required
            className='btn-user'
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            required
            className='btn-user'

          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="password"
            id="password"
            name="password"
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
            required
            className='btn-user'

          />
        </div>
        <button type="submit" className='btn'>
          Create Account
        </button>
      </form>
      {message && <p style={{ marginTop: '10px', color: 'green' }}>{message}</p>}
    </div>
  );
};

export default CreateAccount;