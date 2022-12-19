import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="topo">
      <div>
        <img src="logo.svg" alt="logo" />
      </div>
      <div className="menu-geral">
        <ul className="menu">
          <li>
            <a className="home">Home</a>
          </li>
          <li>
            <a className="home">sobre</a>
          </li>

          <div className="sub-menu-bar">
            <li>
              <a>Cadastro</a>
              <ul className="submenu">
                <li id="quadrado"></li>
                <nav className="menusub-sub">
                  <Link>Internet</Link>

                  <Link>Claro APP</Link>

                  <Link>Claro TV HD</Link>

                  <Link>Virtua + Claro TV 4k</Link>

                  <Link>Móvel controle</Link>

                  <Link>4play</Link>
                </nav>
              </ul>
            </li>
          </div>

          <li>
            <a>Planos</a>
            <ul className="submenu">
              <li id="quadrado2"></li>
              <li>
                <a>Iphone 6</a>
              </li>
              <li>
                <a>Iphone 6S</a>
              </li>
              <li>
                <a>Iphone 7</a>
              </li>

              <li>
                <a>Iphone 8</a>
              </li>
            </ul>
          </li>

          <li>
            <a>Atividade</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
