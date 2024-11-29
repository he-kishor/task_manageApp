import './navbar.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function Navbar() {
    const navigate = useNavigate();
  return (
    <div>
      < nav className="navbar bg-primary" data-bs-theme="dark">
      
  <div className="container-fluid">
    <a className="navbar-brand">Task</a>
    <form className="d-flex" role="search">
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
     <button class="btn btn-primary me-md-2" type="button" onClick={() => navigate('/')}>Login</button>
     <button class="btn btn-primary" type="button" onClick={() => navigate('/signup')}>Signup</button>
   </div>

     </form>
  </div>

      </nav>
    </div>
  );
}
