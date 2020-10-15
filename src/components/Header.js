import React from "react";
import { withRouter, NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <div className="flex">
      <img src='/logo.png' alt="Hooks News logo" className="logo"/>
      <NavLink to="/" className="header-title">
      Hooks News
      </NavLink>
      <NavLink to="/" className="header-link">
      New
      </NavLink>
      <div className="divider"> | </div>
      <NavLink to="/top" className="header-link">
      Top
      </NavLink>
      <div className="divider"> | </div>
      <NavLink to="/search" className="header-link">
      Search
      </NavLink>
      <div className="divider"> | </div>
      <NavLink to="/create" className="header-link">
      Submit
      </NavLink>
      </div>
      <div className="flex">
      <NavLink to="/login" className="header-link">
      Login
      </NavLink>
      </div>
    </div>
    )
}

export default Header;
