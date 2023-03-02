import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand mono" to="/">
          react-fire-base
        </Link>
        <div className="collapse navbar-collapse">
          <div className="navbar-nav">
            <NavLink className="nav-link" to="/demo">
              Demo
            </NavLink>
            <NavLink className="nav-link" to="/home">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/settings">
              Settings
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
