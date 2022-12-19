import React, { useState } from "react";
import { CadastroData } from "./CadastroData";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import "../App.css";
import "../cadastro.css";
import "../Mobile.scss";
const Cadastro = ({ cadastros }) => {
  const [currente, setCurrente] = useState(0);
  const length = cadastros.length;

  const nextCadastro = () => {
    setCurrente(currente === length - 1 ? 0 : currente + 1);
  };

  const prevCadastro = () => {
    setCurrente(currente === 0 ? length - 1 : currente - 1);
  };

  if (!Array.isArray(cadastros) || cadastros.length <= 0) {
    return null;
  }
  console.log(currente);

  return (
    <section className="Fotocadastro">
      <FaChevronCircleLeft className="left-arroww" onClick={prevCadastro} />
      <FaChevronCircleRight className="right-arroww" onClick={nextCadastro} />
      {CadastroData.map((cadastro, index) => {
        return (
          <div
            className={index === currente ? "cadastro activee" : "cadastro"}
            key={index}
          >
            {index === currente && (
              <div className="Fotocadastro" id="Foto">
                <img src={cadastro.image} id="FotoCapa" alt="" />{" "}
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Cadastro;
