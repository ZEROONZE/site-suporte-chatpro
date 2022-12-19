import React, { useState } from "react";
import { MdClase } from "react-icons/md";
import "../Mobile.scss";

const BarraMenu = () => {
  const [openMenu, setOpenmenu] = useState(false);
  const handleOpen = () => {
    setOpenmenu(!openMenu);
    console.log(openMenu);
  };

  return (
    <div>
      <div class="header__toggle" id="header-toggle">
        <label for="checkbox" className="hamburger">
          <input type="checkbox" onClick={handleOpen} id="checkbox"></input>
          <span className="line line--top"> </span>
          <span className="line line--middle"></span>
          <span className="line line--bottom"></span>
        </label>
      </div>
    </div>
  );
};

export default BarraMenu;
