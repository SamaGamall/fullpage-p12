import React, { useState } from 'react';
import { Link, NavLink  } from "react-router-dom";
import './Header.css';
import {FaBars} from 'react-icons/fa';

import MenuIcon from '@mui/icons-material/Menu';


const Header = () => {
  
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "nav-bar") {
      x.className += " responsive";
    } else {
      x.className = "nav-bar";
    }
  }
  return (
    <>
  
  <header>
    <nav className="nav-bar" id="myTopnav">
      <Link className="active" to="/" style={{ color: "black" }}>
        home
      </Link>
      <Link className="Mainlink" to="/donationlocation " style={{ color: "black" }}>
        Donor Center Location
      </Link>
      <Link className="Mainlink" style={{ color: "black" }}>
        About Us
      </Link>
      <Link className="Mainlink" style={{ color: "black" } } >
        Contant
      </Link>
      
      <Link
        className=" btn1-1"
        to="/Pagelogin"
      >
        donate
      </Link>
      

      <a href="javascript:void(0);" className="icon2" onClick={myFunction}>
      <MenuIcon  />
      </a>

      
    </nav>
  </header>
</>

  );
}

export default Header;

