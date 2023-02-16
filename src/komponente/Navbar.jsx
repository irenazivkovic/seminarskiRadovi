 
import { Link, useNavigate } from "react-router-dom";
function Navbar({token}) {

 
    
  return (

      <div className="navbar">
        {

            token==null? 
               <></>
               
            :
                window.sessionStorage.getItem("auth_name")=='Admin'  ? 
                <>
                 <Link to="/admin" className="navbar-items">Admin  </Link>
       

                 
                  <Link to="/" className="navbar-items" onClick={handleLogout}>Odjavi se  </Link>
                </>
            :
            <>
                        <Link to="/zadaci" className="navbar-items">Dogadjaji  </Link>
                

                 <Link to="/" className="navbar-items" onClick={handleLogout}>Odjavi se  </Link>
           </>
 

        }
        


       
   </div>
    
  );
}

export default Navbar;
