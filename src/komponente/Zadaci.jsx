 
import { BsPaperclip } from 'react-icons/bs';
 import React from 'react';
 
 function Zadaci({zadaci}) {
    let sortiranoRastuce = true;
    function sortirajPoRoku() {
        let tabela = document.getElementById("zadaciTabela").getElementsByTagName('tbody')[0];
        let redovi = tabela.rows;
        let niz = [];
        for (let i = 0; i < redovi.length; i++) {
          let datum = new Date(redovi[i].cells[2].innerHTML);
          niz.push({ red: redovi[i], datum: datum });
        }
      
        if (sortiranoRastuce) {
          niz.sort(function(a, b) {
            return a.datum - b.datum;
          });
          sortiranoRastuce = false;
        } else {
          niz.sort(function(a, b) {
            return b.datum - a.datum;
          });
          sortiranoRastuce = true;
        }
      
        for (let i = 0; i < niz.length; i++) {
          tabela.appendChild(niz[i].red);
        }
      }
 
 
      
      
    return (
        
             
            <div className="zadaci">
                    <h1>Zadaci za predaju</h1>
                    <button className="btn btn-primary" onClick={sortirajPoRoku}>Sortiraj po roku</button>
              <table id="zadaciTabela" class="table table-striped table-bordered table-sm" cellspacing="0" width="100%">
                    <thead>
                        <tr>
                        <th class="th-sm">ID
                        </th>
                        <th class="th-sm">Tema
                        </th>
                        <th class="th-sm">Rok
                        </th>
                        <th class="th-sm">Profesor
                        </th>
                        <th class="th-sm">Predaj
                        </th>
 
                        </tr>
                    </thead>
                    <tbody>
                    { zadaci .map((z) => (  <tr key={z.id}><td>{z.id}</td> <td>{z.tema}</td><td>{z.rok}</td> <td>{z.profesor.name}</td><td><button className='dugme'>Predaj<BsPaperclip></BsPaperclip></button></td></tr>  ))}

                    </tbody>
                </table> 
                
    
        </div>
       
    );
  }
  
  export default Zadaci;
  