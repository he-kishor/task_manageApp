import React, {useState} from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
export default function Login() {
    //state for email and pass
    const [formData, setFormData] = useState({
      email:'',
      pass:''
    });
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const handleInputChange=(e)=>{
      const {name, value} = e.target;
      console.log(name,value);
      setFormData({...formData,[name]:value});
    }
    
    const handlelogin = async()=>{
      const {email, pass} = formData;
      if (!email.trim() || !pass.trim()){
        setErrorMessage('All fields are required');
      }

      const apiUrl = "https://task-managementapi-production.up.railway.app/api/users/login";
      const payload ={
        email, pass
      } ;
      try{
        const response = await fetch(apiUrl,{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify(payload),
          credentials:'include',
        });
        const data = await response.json();

        if(response.status === 201){
          console.log(data);
          setTimeout(() => navigate('/home'), 3000); // Redirect to login after 3 seconds
           
        }
        else {
          setErrorMessage(data.message || 'Signup failed. Please try again.');
          setSuccessMessage('');
        }

      }
      catch(error){
        setErrorMessage('Something went wrong. Please try again later.');
        setSuccessMessage('');
      }
    }
    const navigate = useNavigate();
  return (
    <div className="login-container">
    <h2 className="login-title">Login</h2>
    <form className="login-form">
    <input type="text" placeholder="email" className="login-input" name='email' value={formData.email} onChange={handleInputChange} />
    <input type="password" placeholder="Password" className="login-input" name='pass' value={formData.pass} onChange={handleInputChange} />
    <button type="button" className="btn btn-primary btn-lg custom-login-btn" onClick={handlelogin}><b>Login</b></button>
    <p><b>Don't have an account?  <span span onClick={() => navigate('/signup')}>Signup</span></b></p>
    <div className='loginwithgoogle'>
    <button type="button" className="btn btn-primary btn-lg btn-google">Login with <b>Google</b></button>
    </div>
  </form>
  {errorMessage && <div className="error-message">{errorMessage}</div>}
  {successMessage && <div className="success-message">{successMessage}</div>}
    
</div>

  );
}
