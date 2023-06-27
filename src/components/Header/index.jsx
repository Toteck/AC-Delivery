import { useState } from "react";
import { useMediaQuery } from "react-responsive";
// import logo from 'src/Logos/AC.png'
import "./style.css";

export function Header() {
  const isMobile = useMediaQuery({ maxWidth: 480 });
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <div>
      <div className="header">
        <div className="logo">
          <a>
            {/* <img scr={logo} /> */}
            Logo
          </a>
        </div>
        {isMobile && <button onClick={toggleMenu}>Menu</button>}
      </div>

      <div id="menu">
        <ul className={`sidebar ${menuOpen ? "active" : ""}`}>
          <a>
            <li>Início</li>
          </a>
          <a>
            <li>Burgers</li>
          </a>
          <a>
            <li>Serviços</li>
          </a>
          <a>
            <li>Contato</li>
          </a>
        </ul>
      </div>
    </div>
  );
}
