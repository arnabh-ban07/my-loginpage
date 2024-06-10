import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate an API call
    setTimeout(() => {
      setMessage('If an account with that email exists, a password reset link will be sent.');
    }, 1000);
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className='form-container-2' >
        <h2 style={{color:'white',fontFamily:'satoshi'}}>Forgot Password</h2>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Enter Valid Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='btn-user'
          />
        </div>
        <button type="submit" className='btn'>
          Reset Password
        </button>
      </form>
      {message && <p style={{ marginTop: '10px', color: 'green' }}>{message}</p>}
    </div>
  );
};

export default ForgotPassword;