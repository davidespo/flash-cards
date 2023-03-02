import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand mono" to="/">
          Flash Cards
        </Link>
        <div className="navbar-nav">
          <NavLink className="nav-link" to="/settings">
            <i className="fa fa-gear"></i>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
