import React, { useState } from 'react';
import './LoginWithCaptcha.css'; // Import file CSS

const generateRandomString = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';
  for (let i = 0; i < 6; i++) {
    randomString += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return randomString;
};

const LoginWithCaptcha = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [captcha, setCaptcha] = useState(generateRandomString());
  const [userInput, setUserInput] = useState('');
  const [isValidCaptcha, setIsValidCaptcha] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const regenerateCaptcha = () => {
    setCaptcha(generateRandomString());
    setUserInput('');
    setIsValidCaptcha(false);
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
    if (e.target.value === captcha) {
      setIsValidCaptcha(true);
    } else {
      setIsValidCaptcha(false);
    }
  };

  const handleLogin = () => {
    // Mock login logic, replace with your actual login logic
    if (username === 'ulya' && password === 'password' && isValidCaptcha) {
      setIsLoggedIn(true);
      setShowSuccessMessage(true);
    } else {
      alert('Invalid credentials or captcha. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
    setShowSuccessMessage(false);
  };

  return (
    <div className="login-container">
      {isLoggedIn ? (
        <div>
          <h2>Welcome, {username}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Login</h2>
          {showSuccessMessage && <p className="success-message">Login Successful!</p>}
          <div>
            <input className="input-field" type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
          </div>
          <div>
            <input className="input-field" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          </div>
          <div>
            <img src={`https://dummyimage.com/200x50/000/fff&text=${captcha}`} alt="Captcha" />
          </div>
          <div>
            <input className="input-field" type="text" value={userInput} onChange={handleInputChange} placeholder="Enter Captcha" />
            <button className="regenerate-button" onClick={regenerateCaptcha}>Regenerate</button>
          </div>
          <button className="login-button" onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default LoginWithCaptcha;