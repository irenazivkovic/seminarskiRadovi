
 
import './App.css';
import Navbar from './komponente/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LoginPage from './komponente/LoginPage';
import React from 'react';
import RegisterPage from './komponente/RegisterPage';
import Zadaci from './komponente/Zadaci';
import axios from 'axios';
import AdminPocetna from './komponente/AdminPocetna';
import Dodaj from './komponente/Dodaj';
import Azuriraj from './komponente/Azuriraj';
import Radovi from './komponente/Radovi';
 
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
function App() {
  const[token,setToken] = useState(null);
  const [zadaci,setZadaci] = useState([ ])
  const [radovi,setRadovi] = useState([ ])
 

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
  useEffect(() => {
    const getRadovi = async () => {
      try {
        const res = await axiosInstance.get( "http://127.0.0.1:8000/api/radovi",
          {
            headers:{'Authorization': `Bearer ${ window.sessionStorage.getItem('auth_token')}`},
          }
        );
        setRadovi(res.data.data);
        console.log(res.data)
      } catch (err) {
        console.log(err);
      }
    };
    getRadovi();
  }, [ axiosInstance]);


  function obrisi(id){
  
    axios
    .delete("http://127.0.0.1:8000/api/zadatak/"+id,{headers:{'Authorization': `Bearer ${ window.sessionStorage.getItem('auth_token')}`} } )
    .then((res)=>{  
        console.log(res.data);
        alert("OBRISANO")
    })
    .catch(function (error) {
        if (error.response) {
          // Request made and server responded
          console.log(error.response.data);
          
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
    
      });
  }

  const [zadatakZaAzuriranje,setZAzuriraj] = useState(null)
  const [zadatakZaPrikazRadova,setzRadovi] = useState(null)


  function setZadatakAzuriraj(zadatak){
    setZAzuriraj(zadatak)
  }
  function setZadatakRadovi(zadatak){
    setzRadovi(zadatak)
  }
  return (
    <div className="App">
        <BrowserRouter  >
          <Navbar token={token} ></Navbar>
          <Routes>
            <Route path="/" element={<LoginPage addToken={setToken}></LoginPage>}></Route>
            <Route path="/register" element={<RegisterPage  ></RegisterPage>}></Route>
            <Route path="/zadaci" element={<Zadaci  zadaci={zadaci}></Zadaci>}></Route>

            <Route path="/admin/radovi" element={<Radovi radovi={radovi}   zadatak={zadatakZaPrikazRadova}></Radovi>}></Route>

            <Route path="/admin/azuriraj" element={<Azuriraj zadatak={zadatakZaAzuriranje}></Azuriraj>}></Route>

            <Route path="/admin/dodaj" element={<Dodaj></Dodaj>}></Route>
            <Route path="/admin" element={<AdminPocetna  zadaci={zadaci} obrisi={obrisi} setZadatakAzuriraj={setZadatakAzuriraj} setZadatakRadovi={setZadatakRadovi}></AdminPocetna>}></Route>
          
           
          </Routes>
    
  </BrowserRouter>
    </div>
  );
}

export default App;
