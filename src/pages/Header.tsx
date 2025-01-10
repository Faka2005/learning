import React from "react";
import { Link } from "react-router-dom";

import '../css/Header.css'; // Assure-toi que ce fichier existe
import SearchBar from "./SearchBar";
import { NavItem } from "../services/data";

function Header() {
  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
        <h1 className="logo">Lumnie</h1>

        {/* Barre de navigation */}
        <nav className="nav">
          <ul className="nav-list">
            {NavItem.map((item, index) => (
              item.active && (
                <li key={index} className="nav-item">
                  <Link to={item.links} className="nav-link">
                    {item.title}
                  </Link>
                </li>
              )
            ))}
          </ul>
        </nav>

        {/* Barre de recherche */}
        <SearchBar />
        
      </div>
    </header>
  );
}

export default Header;
