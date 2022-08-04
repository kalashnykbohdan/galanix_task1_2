import React from "react";

import style from "./Exercise1.module.scss";

const Exercise1 = () => {
  return (
    <div className="layer">
      <h1>Задание #1</h1>
      <div className={style.flag + " " + style.ukraine}></div>
      <div className={style.flag + " " + style.japan}> </div>

      <div className={style.flag + " " + style.iceland}>
        <span className={style.iceland__elem_leftup}></span>
        <span className={style.iceland__elem_leftdown}></span>
        <span className={style.iceland__elem_rightup}></span>
        <span className={style.iceland__elem_rightdown}></span>
      </div>
      <div className={style.flag + " " + style.czech_republic}></div>
    </div>
  );
};

export default Exercise1;
