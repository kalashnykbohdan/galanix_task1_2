import React, { useState, useEffect, useContext } from "react";

import { Context } from "./../../context";
import style from "./Exercise2.module.scss";
import Modal from "./../../components/Modal";

import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";

const mass_image = [
  {
    name: "image_1",
    url: require("./images/1.jpg"),
  },
  {
    name: "image_2",
    url: require("./images/2.jpg"),
  },
  {
    name: "image_3",
    url: require("./images/3.jpg"),
  },
  {
    name: "image_4",
    url: require("./images/4.jpg"),
  },
  {
    name: "image_5",
    url: require("./images/5.jpg"),
  },
  {
    name: "image_6",
    url: require("./images/6.jpg"),
  },
  {
    name: "image_7",
    url: require("./images/7.jpg"),
  },
  {
    name: "image_8",
    url: require("./images/8.jpg"),
  },
  {
    name: "image_9",
    url: require("./images/9.jpg"),
  },
  {
    name: "image_10",
    url: require("./images/10.jpg"),
  },
  {
    name: "image_11",
    url: require("./images/11.jpg"),
  },
  {
    name: "image_12",
    url: require("./images/12.jpg"),
  },
];

const Exercise2 = () => {
  const [orignleImg, setOrignleImg] = useState("");
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [massImg, setMassImg] = useState([]);

  const { modalActive, setModalActive } = useContext(Context);

  let all = document.querySelectorAll("li img");

  useEffect(() => {
    setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
  });

  useEffect(() => {
    const localstoregeMassImg = localStorage.getItem("massImg");

    if (localstoregeMassImg) {
      setMassImg([...JSON.parse(localstoregeMassImg)]);
    } else {
      setMassImg([...mass_image]);
    }
  }, []);

  useEffect(() => {
    if (massImg.length !== 0) {
      localStorage.setItem("massImg", JSON.stringify(massImg));
    }
  }, [massImg]);

  const handleImage = (e) => {
    setModalActive(true);

    const urlImg = e.target.getAttribute("src");
    setOrignleImg(urlImg);
  };

  const handleReestablish = () => {
    localStorage.removeItem("massImg");
    setMassImg([...mass_image]);
  };

  const handledeleteImg = (outItem) => {
    setMassImg((prevState) =>
      prevState.map((item) => (item === outItem ? { ...item, url: "" } : item))
    );
  };

  return (
    <div className="layer">
      <div className={style.container}>
        <h1>
          Задание #2 Time {time} Quantity Img {all.length}
        </h1>
        <ul className={style.list}>
          {massImg.map((item) => (
            <Item
              item={item}
              handleImage={handleImage}
              handledeleteImg={handledeleteImg}
            />
          ))}
        </ul>
        <button onClick={() => handleReestablish()}>Востановить</button>
      </div>
      {modalActive && (
        <Modal>
          <img
            src={orignleImg}
            alt="largeImageURL"
            className={style.img__modal}
          />
        </Modal>
      )}
    </div>
  );
};

export default Exercise2;

const Item = ({ item, handleImage, handledeleteImg }) => {
  // const url = require(`${item.url}`);

  return (
    <li>
      <div className={style.item}>
        {item.url && (
          <img
            src={item.url}
            className={style.img}
            onClick={(e) => handleImage(e)}
          />
        )}
      </div>
      <button onClick={() => handledeleteImg(item)}>
        <Icon path={mdiClose} title="User Profile" size={1} />
      </button>
    </li>
  );
};
