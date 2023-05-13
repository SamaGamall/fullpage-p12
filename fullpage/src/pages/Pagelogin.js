import React, { useState } from 'react';
import { Link, NavLink  } from "react-router-dom";
import Login from'../comp/Login';
import Navbarinside from '../comp/Navbarinside';




const Pagelogin = () => {
  return (
    <>
    <Navbarinside />
    <Login />
    </>
  );
}

export default Pagelogin;

