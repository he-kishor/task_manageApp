import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar/navbar';
import Login from './component/Login/login';
import Signup from './component/Signup/signup';
import Home from './component/homepage/home';
import ProtectedRoute from './component/API_Handling/utils/protectedroutes';
import Error404 from './component/API_Handling/utils/error404';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/home" element={<ProtectedRoute>
              <Home />
            </ProtectedRoute>}/>
            <Route path="/error404" element={<Error404 />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
