import { Link } from 'react-router-dom';

const DropdownLink = ({ to, handleClick, children }) => {
  return (
    <Link
      onClick={handleClick}
      to={to}
      className="dropdown-link py-4 w-3/4 rounded-lg text-white text-center transition ease-in-out hover:text-[#74C69D] hover:bg-white"
    >
      {children}
    </Link>
  );
};

export default DropdownLink;
