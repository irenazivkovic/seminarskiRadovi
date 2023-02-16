
import './App.css';
import Navbar from './komponente/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const[token,setToken] = useState(null);

  return (
    <div className="App">
        <BrowserRouter  >
          <Navbar token={token} ></Navbar>
          <Routes>
            <Route path="/" element={<Login addToken={addToken}></Login>}></Route>
             
           
          </Routes>
    
  </BrowserRouter>
    </div>
  );
}

export default App;
