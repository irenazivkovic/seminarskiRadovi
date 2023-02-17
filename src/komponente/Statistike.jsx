 
import { BsPaperclip } from 'react-icons/bs';
import React, { useState } from 'react';
import { Modal } from 'bootstrap';
import axios from 'axios';
import BarChartComponent from './BarChart';

function Statistike({zadaci,radovi,komentari}) {
   
    
 


   return (
       
          <>       <div className="wrapper">
                <div className="box pink">
                    ZADACI(UKUPNO): <br/>
                    <span>{zadaci.length}</span>
                </div>
                <div className="box green">
                    BROJ PREDATIH RADOVA:<br/>
                    <span>{radovi.length}</span>
                </div>
                <div className="box blue">
                    BROJ OCENJENIH RADOVA:<br/>
                    <span>{komentari.length}</span>
                </div>
   
       </div>
       <BarChartComponent  radovi={radovi} zadaci={zadaci} komentari={komentari}></BarChartComponent>
       </>

   );
 }
 
 export default Statistike;
 