import React from "react";
import icon from "./favicon-32x32.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand ml-2">
          Meme Genesis
        </Link>
        <div id="navbar" className="navbar">
          <ul
            style={{ fontSize: "0.8rem", letterSpacing: "0.2rem" }}
            className="navbar-nav ml-auto"
          >
            <li className="nav-item">
              <Link to="/mint" className="nav-link">
                Mint
              </Link>
            </li>
            <li className="nav-item">
              <Link to="nftrade" className="nav-link">
                Marketplace
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
