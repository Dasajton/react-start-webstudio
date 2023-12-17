import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full bg-lightgreen text-white font-work flex justify-between items-center px-32 py-8">
      <div className="logo-wrapper flex items-center gap-4">
        <img className="w-16" src="./images/logo.svg" alt="logo" />
        <h2 className="text-4xl font-semibold">Start</h2>
      </div>

      <ul className="text-lg space-x-8">
        <Link to="/">Home</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
