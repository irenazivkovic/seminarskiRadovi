 
 
import React from 'react';
function Radovi({zadaci,radovi}) {
 
    console.log(radovi.filter((r)=>r.zadatak.profesor.id==window.sessionStorage.getItem("auth_id")))
    return (
  
      <div className='container'>
          
        

        <table id="dtBasicExample" className="table table-striped table-bordered table-sm" cellSpacing="0" width="100%">
          <thead>
            <tr>
              <th className="th-sm">ID
              </th>
              <th className="th-sm">Student
              </th>
              <th className="th-sm">Zadatak
              </th>
              <th className="th-sm">Datum predaje
              </th>
              <th className="th-sm">Rad
              </th>
 
            </tr>
          </thead>
          <tbody>
              {radovi.map((r)=>(<tr key={r.id}><td>{r.id}</td><td>{r.student.name}</td><td>{r.zadatak.tema}</td><td>{r.datum_predaje}</td><td><a href={`http://127.0.0.1:8000/uploads/${r.file.file_name}`} download target={'_blank'}>PREUZMI</a></td></tr>))}
            </tbody>
 
      </table>
      </div>
      
    );
  }
  
  export default Radovi;
  