import React from "react";
import CartWidget from "./CartWidget/CartWidget";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";


const hadleSubmit= (search)=>{

  

      console.log(search)
  
      

   

}

const NavBar = ()=>{

    return (

        <div className="container">
        <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
<div className="container-fluid">
<Link className="navbar-brand" to="/">Shopping</Link>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarNavDropdown">
<ul className="navbar-nav">
<li className="nav-item">
<Link className="nav-link active" aria-current="page" to="/">Home</Link>
</li>
<li className="nav-item">
<Link className="nav-link" to="/productos/abrigos">Abrigos</Link>
</li>
<li className="nav-item">
<Link className="nav-link" to="/productos/pantalones">Pantalones</Link>
</li>
<SearchBar enSubmit ={hadleSubmit}/>

</ul>
</div>
</div>
<CartWidget/>
</nav>
    
</div>

    )

}

export default NavBar