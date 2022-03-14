import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return <nav className="navbar sticky-top navbar-dark bg-dark">
  <div className="container-fluid">
    <NavLink to="/" className="navbar-brand" style={{color:'#e50914', fontSize:'29px'}}>NETFLIX</NavLink>
    <form className="d-flex">
      
      <button className="btn btn-danger mx-2" style={{backgroundColor:'#e50914'}}>
        <NavLink className='text-plane' to='/registration'>
        Join Now</NavLink> </button>
      <button className="btn btn-outline-light" type="submit">Sign In</button>
    </form>
  </div>
</nav>;
}

