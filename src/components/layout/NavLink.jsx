import { Link } from "react-router-dom";

const NavLink = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="hover:text-hover_color font-bold text-white transition-colors duration-200 hover:scale-125"
    >
      {children}
    </Link>
  );
};

export default NavLink