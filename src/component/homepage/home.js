import React, {useState} from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';
export default function Home() {
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();
    const getfunction = async()=>{
      const apiURL="https://task-managementapi-production.up.railway.app/api/task/get_alltask"
      try{
            
        const response = await fetch(apiURL, {
          method: 'Get',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include', // Add if your server sends cookies
           });

          
      
        if (response.status === 204){
            setSuccessMessage("get data");
            const data= await response.json();
            console.log(data)
            setErrorMessage('');
           setTimeout(() => navigate('/'), 3000); // Redirect to login after 3 seconds
        }else {
            //setErrorMessage(data.message || 'Signup failed. Please try again.');
            //setSuccessMessage('');
          }
      }
      catch (error) {
        setErrorMessage('something went wrong please try after sometime');
        setSuccessMessage('');
      }  
    }  
  return (
    <div className="login-containe">
      <h1>Home Page</h1>
      <button type="button" className="btn btn-primary btn-lg custom-login-btn" onClick={getfunction}><b>click</b></button>
    {errorMessage && <div className="error-message">{errorMessage}</div>}
    {successMessage && <div className="success-message">{successMessage}</div>}

     
</div>

  );
}
