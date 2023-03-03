import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand mono" to="/">
          Flash Cards
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link ms-3" to="/">
              <i className="fa fa-home"></i> Home
            </Link>
            <NavLink className="nav-link ms-3" to="/settings">
              <i className="fa fa-gear"></i> Settings
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Header2 = () => {
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
