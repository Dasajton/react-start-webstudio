import MenuLink from './MenuLink';

const Navbar = () => {
  const links = [
    { path: '/', label: 'Home' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/services', label: 'Services' },
    { path: '/Contact', label: 'Contact' }
  ];

  return (
    <nav className="w-full bg-lightgreen text-white font-work flex justify-between items-center px-32 py-8">
      <div className="logo-wrapper flex items-center gap-4">
        <img className="w-16" src="./images/logo.svg" alt="logo" />
        <h2 className="text-4xl font-medium tracking-wider">Start</h2>
      </div>

      <ul className="text-lg space-x-8">
        {links.map((link, index) => (
          <MenuLink key={index} to={link.path}>
            {link.label}
          </MenuLink>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
