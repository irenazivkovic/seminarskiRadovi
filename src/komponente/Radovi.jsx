import { MDBDataTableV5 } from 'mdbreact';
 
import React from 'react';
function Radovi({zadaci,radovi}) {

    function oceni(){
        
    }

    const [datatable, setDatatable] = React.useState({
       
        columns: [
          {
            label: 'id',
            field: 'id',
            width: 150,
          },
          {
            label: 'student',
            field: 'student',
            width: 200,
          },
          {
            label: 'zadatak',
            field: 'zadatak',
            width: 270,
          },
          {
            label: 'datum_predaje',
            field: 'datum_predaje',
            width: 270,
          },
          {
            label: 'rad',
            field: 'rad',
            width: 270,
          },
          {
            label: 'oceni_rad',
            field: 'oceni_rad',
            width: 270,
          }
           
        ],
        rows:  radovi.map(r=>{
            return{
              id: r.id,
              student:r.student.name,
              zadatak:r.zadatak.tema,
              datum_predaje:   r.datum_predaje,
              rad: <a href={`http://127.0.0.1:8000/uploads/${r.file.file_name}`} download target={'_blank'}>OTVORI</a> ,
              oceni_rad: <><input type="text" /><button className='btn' onClick={()=>oceni}>Oceni</button></>
            }
            
    
        })
       
    })      
        
    
      return <div className='container'><MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} /></div>;
    }

  
  export default Radovi;
  