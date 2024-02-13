import React, { useState } from "react";
import { FaBars, FaTimes, FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const links = [
    {
      id: 1,
      link: "Données",
    },
    {
      id: 2,
      link: "à propos",
    },
    {
      id: 3,
      link: "Soutient",
    },
    {
      id: 4,
      link: "Organiser",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <nav className="navbar">
      <div>
        <h1>A l'intérieur D'Airbnb</h1>
        <h3>Ajouter des données aux débats</h3>
      </div>

      <ul className={nav ? "mobile-menu" : "desktop-menu"}>
        {links.map(({ id, link }) => (
          <li key={id} onClick={closeNav}>
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
        <li>
          <button className="donate-button">Faire un don</button>
        </li>
        <li>
          <a href="https://www.facebook.com/">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/">
            <FaTwitter />
          </a>
        </li>
      </ul>

      <div onClick={toggleNav} className="toggle-button">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
    </nav>
  );
};

export default NavBar;
