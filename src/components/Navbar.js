import logo from '../assets/planet.png';

function Navbar() {
  const links = [
    { path: '/', text: 'Rockets' },
    { path: 'category', text: 'Missions' },
    { path: 'profile', text: 'My Profile' },
  ];
  return (
    <nav>
      <div className="logo-container">
        <img src={logo} id="logo" alt="Logo" />
        <p>Space Travellers</p>
      </div>
      <ul className="nav-items">
        {links.map((link) => <li key={link.text} className="nav-item">{link.text}</li>)}
      </ul>
    </nav>
  );
}

export default Navbar;
