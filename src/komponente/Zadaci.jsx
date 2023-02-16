 

 import React from 'react';
 
 function Zadaci({zadaci}) {

    return (
        <div>
             
            <div className="all-events">
              
               { zadaci .map((z) => (  <p key={z.id}>{z.tema}</p>  ))}
                     
                
    
        </div>
      </div>
    );
  }
  
  export default Zadaci;
  