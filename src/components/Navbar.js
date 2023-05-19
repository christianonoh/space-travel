import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/planet.png';

function Navbar() {
  const links = [
    { path: '/', text: 'Rockets' },
    { path: 'missions', text: 'Missions' },
    { path: 'profile', text: 'My Profile' },
  ];
  return (
    <nav>
      <Link to="/">
        <div className="logo-container">
          <img src={logo} id="logo" alt="Logo" />
        </div>
      </Link>
      <ul className="nav-items">
        {links.map((link) => <li key={link.text} className="nav-item"><NavLink to={link.path}>{link.text}</NavLink></li>)}
      </ul>
    </nav>
  );
}

export default Navbar;
