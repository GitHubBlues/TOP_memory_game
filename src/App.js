import React, { useState } from "react";
import './App.css';
import Score from "./Components/score.js";
import Levels from "./Components/level.js";
import Title from "./Components/title.js";
import Instructions from "./Components/instructions.js";
import CardContainer from "./Components/card-container.js";
import Modal from "./Components/modal.js";
import generateCardData from "./Components/generateDB.js";

function App() {
  const [allCardDB, setAllCardDB] = useState( generateCardData() );  
  const [modalState, setModalState] = useState( false );  

  return (
    <div className="App">
      <div className="left-container">
        <Score/>
        <Levels/>  
      </div>
      <div className="right-container">
        <Title />
        <Instructions />
        <CardContainer allDB={allCardDB} setAllDB={setAllCardDB} setModal={setModalState} />
      </div>
      { modalState && <Modal setModal={setModalState} setAllDB={setAllCardDB}/>}
    </div>
  );
}

export default App;