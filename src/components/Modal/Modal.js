import React, { useState, useEffect, useContext } from "react";
import { Context } from "./../../context";

import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";

import style from "./Modal.module.scss";

const Modal = ({ children }) => {
  const { setModalActive } = useContext(Context);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setModalActive(false);
    }
  };

  const handleClick = () => {
    setModalActive(false);
  };

  return (
    <div className={style.overlay} onClick={(e) => handleBackdropClick(e)}>
      <div className={style.container}>
        {children}
        <button className={style.icon} onClick={() => handleClick()}>
          <Icon path={mdiClose} title="User Profile" size={1} />
        </button>
      </div>
    </div>
  );
};

export default Modal;
