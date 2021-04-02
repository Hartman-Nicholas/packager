import { Link, useLocation } from "react-router-dom";

export const Header: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <div>
      {!(pathname === "/") && (
        <header>
          <Link to="/home">
            {" "}
            <i className="fas fa-shipping-fast"></i>
          </Link>
          <h1>Packager</h1>
          <ul>
            <li>Home</li>
            <li>Package Map</li>
            <li>Contact Us</li>
          </ul>
        </header>
      )}
      {pathname === "/" && (
        <header>
          <Link to="/home">
            {" "}
            <i className="fas fa-shipping-fast"></i>
          </Link>
          <h1>Header</h1>
          <ul>
            <li>Home</li>
          </ul>
        </header>
      )}
    </div>
  );
};
