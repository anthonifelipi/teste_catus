import "./styles.css";
import logo from "../../assets/img/logo.png";
import search from "../../assets/img/search.png";
import cartIcon from "../../assets/img/cartIcon.png";
import { useState } from "react";
import menuIcon from "../../assets/svg/menuIcon.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header>
      <div className="container">
        <img src={logo} alt="Catus Logo" id="logo" />
        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          {" "}
          <ul>
            <li>
              <a href="#loja">Loja</a>
            </li>
            <li>
              <a href="#login">Login</a>
            </li>
            <li>
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Digite aqui sua busca" />
          <img src={search} alt="Buscar" className="search-icon" />
        </div>
        <div className="cart">
          <a href="#carrinho">
            <img src={cartIcon} alt="Carrinho" />
          </a>
        </div>
        <div className="menu-icon" onClick={toggle}>
          <img src={menuIcon} alt="Menu" />
        </div>
      </div>
    </header>
  );
};
export default Header;
