import { Link } from 'react-router-dom';

const MenuLink = ({ to, children }) => {
  return (
    <Link className="navlinks" to={to}>
      {children}
    </Link>
  );
};

export default MenuLink;
