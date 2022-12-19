import { FcCheckmark } from "react-icons/fc";

import { MdOutlineClose } from "react-icons/md";

export const ScheduleShots = () => {
  return (
    <div className="content-one">
      <div className="content-two">
        <div className="content-tree">
          <h3>Como agendar os disparos? </h3>

          <iframe
            width={500}
            height={340}
            className="video"
            src="https://www.youtube.com/embed/w8Q3GLBe5mQ"
            title="chatPro - Plataforma de Multiatendimento pelo WhatsApp"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="content-body">
            <p>
              <span style={{ fontWeight: "bold" }}>1° </span> Passo: Entre no
              site{" "}
              <a href="https://api.chatpro.com.br">
                https://api.chatpro.com.br
              </a>
              , para conectar sua instância.
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>2° </span> Passo: Faça o
              login com o email e senha que foram enviado no seu whatssap.
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>3° </span> Passo: Clique em{" "}
              <span style={{ fontWeight: "bold" }}>adicionar instância</span> e
              depois em{" "}
              <span style={{ fontWeight: "bold" }}>criar instância.</span>
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>4°</span> Passo: Clique em{" "}
              <span style={{ fontWeight: "bold" }}>acessar</span> e der um nome
              para sua instância.
            </p>
            <p>
              {" "}
              <span style={{ fontWeight: "bold" }}>5°</span> Passo: Use o
              whatssap no seu aparelho para ler o QRcode.
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>
                ( Os disparos será enviado pelo numero que foi conectado)
              </span>
            </p>
            <div className="content-button">
              <p>Isso foi útil</p>
              <div className="button-yes-or-no">
                <button className="button-yes">
                  <FcCheckmark
                    style={{
                      margin: "auto",
                      fontSize: "17px",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "-3px",
                    }}
                  />
                  <span> </span> Sim
                </button>
                <button className="button-no">
                  <MdOutlineClose
                    className="icon-no"
                    style={{
                      color: "#ff0000",
                      margin: "auto",

                      alignItems: "center",
                      border: "none",
                      fontSize: "17px",
                      justifyContent: "center",
                      marginBottom: "-3px",
                    }}
                  />
                  <span> </span> Não
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
