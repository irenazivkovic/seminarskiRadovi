
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './komponente/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LoginPage from './komponente/LoginPage';
import React from 'react';
import RegisterPage from './komponente/RegisterPage';
import Zadaci from './komponente/Zadaci';
import axios from 'axios';
 
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
function App() {
  const[token,setToken] = useState(null);
  const [zadaci,setZadaci] = useState([ ])
 

  useEffect(() => {
    const getZadaci = async () => {
      try {
        const res = await axiosInstance.get( "http://127.0.0.1:8000/api/zadatak",
          {
            headers:{'Authorization': `Bearer ${ window.sessionStorage.getItem('auth_token')}`},
          }
        );
        setZadaci(res.data.data);
        console.log(res.data.data)
      } catch (err) {
        console.log(err);
      }
    };
    getZadaci();
  }, [ axiosInstance]);
  return (
    <div className="App">
        <BrowserRouter  >
          <Navbar token={token} ></Navbar>
          <Routes>
            <Route path="/" element={<LoginPage addToken={setToken}></LoginPage>}></Route>
            <Route path="/register" element={<RegisterPage  ></RegisterPage>}></Route>
            <Route path="/zadaci" element={<Zadaci  zadaci={zadaci}></Zadaci>}></Route>

             
           
          </Routes>
    
  </BrowserRouter>
    </div>
  );
}

export default App;
