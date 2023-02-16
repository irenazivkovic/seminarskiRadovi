 

 import React from 'react';
 
 function Zadaci({zadaci}) {

    return (
        <div>
             
            <div className="all-events">
              
               { zadaci .map((z) => (  <p key={z.id}>{z.tema} {z.rok} {z.profesor.name}</p>  ))}
                     
                
    
        </div>
      </div>
    );
  }
  
  export default Zadaci;
  