import { BsFillTrashFill, BsPencilFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';
import React from 'react';
function AdminPocetna({zadaci,obrisi}) {
    let navigate = useNavigate();
    function dodaj(){
        navigate("/admin/dodaj/");
    }
    function azuriraj(id){

        
    }
    console.log(zadaci.filter((z)=>z.profesor.id==window.sessionStorage.getItem("auth_id")))
    return (
  
      <div className='container'>
           <button className="btn btn-primary" onClick={dodaj}><AiOutlinePlus></AiOutlinePlus>Dodaj</button>
        

        <table id="dtBasicExample" className="table table-striped table-bordered table-sm" cellSpacing="0" width="100%">
          <thead>
            <tr>
              <th className="th-sm">ID
              </th>
              <th className="th-sm">Tema
              </th>
              <th className="th-sm">Rok
              </th>
              <th className="th-sm">Procenat od ukupne ocene
              </th>
              <th className="th-sm">Opcije
              </th>
            </tr>
          </thead>
          <tbody>
              {zadaci.filter((z)=>z.profesor.id==window.sessionStorage.getItem("auth_id")).map((z)=>(<tr key={z.id}><td>{z.id}</td><td>{z.tema}</td><td>{z.rok}</td><td>{z.koeficijent}</td><td><button className="btn" onClick={() => obrisi(z.id)}><BsFillTrashFill></BsFillTrashFill></button><button className="btn" onClick={() => azuriraj(z.id)}><BsPencilFill></BsPencilFill></button></td></tr>))}
            </tbody>
 
      </table>
      </div>
      
    );
  }
  
  export default AdminPocetna;
  