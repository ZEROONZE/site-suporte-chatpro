import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcExpand, FcCollapse } from "react-icons/fc";
import "../Mobile.scss";

const Navbar = () => {
  const [active, setMode] = useState(false);
  const toggleMode = () => {
    setMode(!active);
  };

  return (
    <div className="topo">
      <div className="logo-chat pro">
        <img src="logo.svg" alt="logo" />
      </div>

      <div className="">
        <div className={active ? "menu menuOpen" : "menu menuClose"}>
          <div className="list">
            <ul className="listItems">
              <li>
                <Link classname="disparos" to="#">
                  Disparo em massa
                  <FcExpand
                    className="icon-menu"
                    style={{ marginBottom: "-3.3px", padding: "0 2px" }}
                  />
                </Link>
                <ul className="submenu">
                  <nav className="menusub-sub">
                    <li>
                      <Link to="/disparos">Como conectar instância?</Link>
                    </li>
                    <li>
                      <Link to="/import-contacts">Como importar contato?</Link>
                    </li>
                    <li>
                      <Link to="/create-menssage">
                        Como criar uma mensagem?
                      </Link>
                    </li>
                    <li>
                      <Link to="/message-variable">
                        Criar mensagem com variáveis?
                      </Link>
                    </li>
                    <li>
                      <Link to="/message-image">
                        Criar mensagem com imagem?
                      </Link>
                    </li>
                    <li>
                      <Link to="/makes-shots">Como fazer o disparo?</Link>
                    </li>
                    <li>
                      <Link to="/schedule-shots">Como agendar disparo?</Link>
                    </li>
                  </nav>
                </ul>
              </li>
              <li>
                <Link classname="disparos" to="#">
                  WhatsApp API
                  <FcExpand
                    className="icon-menu"
                    style={{ marginBottom: "-3.3px", padding: "0 2px" }}
                  />
                </Link>
                <ul className="submenu11">
                  <nav className="menusub-sub1">
                    <li>
                      <Link to="/presentation-api">O que é o chatPro API?</Link>
                    </li>
                    <li>
                      <Link to="/send-menssage">
                        Como fazer teste Send_message?
                      </Link>
                    </li>
                    <li>
                      <Link to="/send-menssage-url">
                        Como fazer teste Send_file_urll?
                      </Link>
                    </li>
                    <li>
                      <Link to="/test-postman">Como testar pelo Postman?</Link>
                    </li>
                    <li>
                      <Link to="/access-panel">Como acessar o paniel?</Link>
                    </li>
                  </nav>
                </ul>
              </li>
              <li>
                <Link classname="disparos" to="#">
                  Chatpro atendimento{" "}
                  <FcExpand
                    className="icon-menu"
                    style={{
                      marginBottom: "-3.3px",
                      padding: "0 2px",
                      color: "#fff",
                    }}
                  />
                </Link>
                <ul className="submenu22">
                  <nav className="menusub-sub2">
                    <li>
                      <Link to="/presentation-chat">
                        O que é chatPro atendimento?
                      </Link>
                    </li>
                    <li>
                      <Link to="/connect-chat">Como conectar instância?</Link>
                    </li>
                    <li>
                      <Link to="/chatbot">O que é chatbot?</Link>
                    </li>
                    <li>
                      <Link to="/configure-chatbot">
                        Como configurar seu ChatPro?
                      </Link>
                    </li>
                  </nav>
                </ul>
              </li>

              <li>
                <Link to="/credits" className="home">
                  Como funciona créditos
                </Link>
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="menumobi">
        <div
          className={active ? "icon iconActive" : "icon"}
          onClick={toggleMode}
        >
          <div className="hamburguer hamburguerIcon"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
