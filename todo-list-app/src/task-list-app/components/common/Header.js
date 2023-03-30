import { Link, React, useContext } from "../../../utils/Imports";
import { ThemeContext } from "../../../App";
const Header = () => {
  const { isDarkTheme, setDarkTheme } = useContext(ThemeContext);
  return (
    <div>
      <nav className={"navbar pl-3 " + (isDarkTheme ? "navbar-dark": "navbar-light")}>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div>
          <button
            className="btn btn-outline-info"
            onClick={() => setDarkTheme((theme) => !theme)}
          >
            {isDarkTheme ? (
              <i className="bi bi-toggle-on"></i>
            ) : (
              <i className="bi bi-toggle-off"></i>
            )}
          </button>
        </div>
      </nav>
      <div className="navbar-expand-md collapse navbar-collapse" id="navbarNav">
        <div className="header-items">
          <ul className="nav navbar-nav mr-auto header-list">
            <li className="nav-item active pl-3 pr-3">
              <Link className="nav-link" to="/">
                React
              </Link>
            </li>
            <li className="nav-item active pl-3 pr-3">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item active pl-3 pr-3">
              <Link className="nav-link" to="/addTask">
                Add Task
              </Link>
            </li>
          </ul>
          <ul className="nav navbar-nav ml-auto header-list">
            <li className="nav-item active pl-3 pr-3">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item inactive pl-3 pr-3">
              <Link className="nav-link disabled" to="/">
                Log Out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
