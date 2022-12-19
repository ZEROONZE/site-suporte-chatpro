import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export const Whatssap = () => {
  return (
    <div className="container-w">
      <a
        href=""
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="fa fa-whatsapp whatsapp-icon"></FaWhatsapp>{" "}
      </a>
    </div>
  );
};
