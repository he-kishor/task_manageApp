import React from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
export default function Login() {
    const navigate = useNavigate();
  return (
    <div className="login-container">
    <h2 className="login-title">Login</h2>
    <form className="login-form">
    <input type="text" placeholder="Username" className="login-input" />
    <input type="password" placeholder="Password" className="login-input" />
    <button type="button" class="btn btn-primary btn-lg custom-login-btn"><b>Login</b></button>
    <p><b>Don't have an account?  <span span onClick={() => navigate('/signup')}>Signup</span></b></p>
    <div className='loginwithgoogle'>
    <button type="button" class="btn btn-primary btn-lg btn-google">Login with <b>Google</b></button>
    </div>
  </form>
</div>

  );
}
