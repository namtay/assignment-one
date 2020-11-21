import React from 'react';
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <div className="row row-content">
          <div className="col-12">
          <nav className="navbar navbar-expand-sm navbar-light bg-light" >
           <ul className="navbar-nav ml-auto">
                <li className="nav-item "><Link className="nav-link" to="/">Home</Link></li> 
                <li className="nav-item"> <Link className="nav-link" to="/signIn">SignIn</Link></li>
           </ul>
           </nav>
          </div>
           
           
            
           
        </div>
    )
}
