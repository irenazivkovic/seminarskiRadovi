 
import { BsPaperclip } from 'react-icons/bs';
 import React from 'react';
 
 function Zadaci({zadaci}) {

    return (
        
             
            <div className="zadaci">
                    <h1>Zadaci za predaju</h1>
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
  