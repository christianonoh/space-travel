import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import spacelogo from '../assets/spacelogo.png';

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
          <img src={spacelogo} id="logo" alt="Logo" />
        </div>
      </Link>
      <ul className="nav-items">
        {links.map((link) => <li key={link.text} className="nav-item"><NavLink to={link.path}>{link.text}</NavLink></li>)}
      </ul>
    </nav>
  );
}

export default Navbar;
