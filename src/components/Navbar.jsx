import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MenuLink from './MenuLink';
import DropdownLink from './DropdownLink';

const Navbar = () => {
  const links = [
    { path: '/', label: 'Home' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/services', label: 'Services' },
    { path: '/Contact', label: 'Contact' }
  ];

  // Toggling Dropdown Menu
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  // Close Dropdown Menu on Window Resize
  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1024) setIsDropdownOpen(false);
    });
  }, []);

  return (
    <nav className="w-full h-[10vh] bg-lightgreen text-white font-arial flex justify-between items-center px-6 lg:px-32 py-8">
      <Link to="/">
        <div className="logo-wrapper flex items-center gap-4">
          <img className="w-16" src="./images/logo.svg" alt="logo" />
          <h2 className="text-4xl font-medium tracking-wider">Start</h2>
        </div>
      </Link>

      <ul className="text-lg space-x-8 hidden lg:block">
        {links.map((link, index) => (
          <MenuLink key={index} to={link.path}>
            {link.label}
          </MenuLink>
        ))}
      </ul>

      <button className="lg:hidden" onClick={toggleDropdown}>
        <img src="./images/burgermenu.svg" alt="burger menu" />
      </button>

      {isDropdownOpen && (
        <div className="dropdown-menu flex flex-col items-center justify-evenly bg-lightgreen border-2 border-black rounded shadow-xl shadow-lightgreen mx-auto py-2 w-3/4 h-[32rem] absolute z-50 top-24 right-0 left-0 overflow-y-auto">
          {links.map((link, index) => (
            <DropdownLink
              key={index}
              handleClick={toggleDropdown}
              to={link.path}
            >
              {link.label}
            </DropdownLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
