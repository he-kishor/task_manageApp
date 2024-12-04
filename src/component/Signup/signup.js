import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // For programmatic navigation
import './signup.css';
export default function Signup() {
  
    const navigate = useNavigate();
    //state for body param
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        pass: '',
        confirmpass: '',
    });
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const handleInputChange =(e)=>{
        const {name, value} = e.target;
        setFormData({...formData,[name]:value});
    };

    const handleSignup = async()=>{

        //checking validation
        const{fname, lname, email, pass, confirmpass} =formData;
        if (pass!==confirmpass){
            setErrorMessage('Password do not match')
        }

        if (!fname.trim() || !lname.trim() || !email.trim() || !pass.trim()){
            setErrorMessage('All fields are required');
        }

        //API Requesting

        const apiURL='http://localhost:3003/api/users/signup';
        const payload = {
            fname,
            lname,
            email,
            pass,
          };

          try{
            
            const response = await fetch(apiURL, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(payload),
              credentials: 'include', // Add if your server sends cookies
               });

            const data= await response.json();
          
            if (response.status === 201){
                setSuccessMessage('Signup successful! Redirecting to login...');
                setErrorMessage('');
               setTimeout(() => navigate('/'), 300); 
            }else {
                setErrorMessage(data.message || 'Signup failed. Please try again.');
                setSuccessMessage('');
              }
          }
          catch (error) {
            setErrorMessage('Something went wrong. Please try again later.');
            setSuccessMessage('');
          }
    }

  return (
    <div className="signup-container">
      
      <h2>Sign Up</h2>
      <form>
        <input 
          type="Text" 
          placeholder="First Name" 
          name='fname'
          value={formData.fname} 
          onChange={handleInputChange}
        />
        <input 
          type="Text" 
          placeholder="Last Name" 
          name="lname"
          value={formData.lname} 
          onChange={handleInputChange} 
        />
         <input 
          type="email" 
          placeholder="Email" 
          name="email"
          value={formData.email} 
          onChange={handleInputChange} 
        />
        <input
            type="password" 
            placeholder="Password" 
            name="pass" 
            value={formData.pass}
            onChange={handleInputChange} 
              
        />

        <input 
        type="password" 
        placeholder="Confirm Password" 
        name="confirmpass" 
        value={formData.confirmpass} 
        onChange={handleInputChange}
        />
        <div className='button-section'>
        <button type="button" className="btn btn-primary btn-lg custom-login-btn" onClick={handleSignup}><b>SignUp</b></button>
      <p>
       <b> Already have an account? <span onClick={() => navigate('/')}>Login here</span></b>
      </p>
      <button type="button" className="btn btn-primary btn-lg btn-google">Signup with <b>Google</b></button>
    </div>
    </form>
    {errorMessage && <div className="error-message">{errorMessage}</div>}
    {successMessage && <div className="success-message">{successMessage}</div>}
    </div>
  );
}
