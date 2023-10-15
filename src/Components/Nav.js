import React from 'react';
import { Link } from "react-router-dom";
import './Nav.css';
const Nav = () => {
  return (
    <div className="container ">
      <div className="row">
      <div className="col-md-9">
      <Link to="/"><img src="./TASTEBUDZ.png" alt="logo"></img></Link></div>
      <div className="col p-4">
        <p><Link to="/recipes"><button type="button" class="btn btn-dark hovering">Recipes</button></Link></p>
      </div>
      <div className="col p-4">
        <p><Link to="/restaurants"><button type="button" class="btn btn-dark hovering">Restaurants</button></Link></p>
      </div>
      </div>
    </div>
  )
}

export default Nav