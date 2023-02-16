
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './komponente/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import LoginPage from './komponente/LoginPage';
import React from 'react';
import RegisterPage from './komponente/RegisterPage';
function App() {
  const[token,setToken] = useState(null);

  return (
    <div className="App">
        <BrowserRouter  >
          <Navbar token={token} ></Navbar>
          <Routes>
            <Route path="/" element={<LoginPage addToken={setToken}></LoginPage>}></Route>
            <Route path="/register" element={<RegisterPage  ></RegisterPage>}></Route>
             
           
          </Routes>
    
  </BrowserRouter>
    </div>
  );
}

export default App;
