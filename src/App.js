import "./App.scss";
import React, { useState } from "react";

import Exercise1 from "./view/Exercise1";
import Exercise2 from "./view/Exercise2";

import { Context } from "./context";

function App() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <Context.Provider value={{ modalActive, setModalActive }}>
      <div className="App">
        <Exercise1 />
        <Exercise2 />
      </div>
    </Context.Provider>
  );
}

export default App;
