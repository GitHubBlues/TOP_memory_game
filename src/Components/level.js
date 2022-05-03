import React, { useState, useEffect } from "react";
import './level.css';
import generateCardData from "./generateDB.js";
import { selectCards } from "./utils.js";

const Levels = ( {currentLevel, setLevel, setScore, setAllCardDB, setSelectedDB} ) => {


  function chooseLevel(event) {
    let level = event.target.id;
    setLevel( level );
    
    setScore();

    let allCardDB = generateCardData(); 
    setAllCardDB( allCardDB );
    setSelectedDB( selectCards( level, allCardDB ));
  };


  return (
    <div className="level-container">
      <div class="choose-level">Choose level</div>
      <div className="level">
        { (currentLevel == 5) && <button onClick={ chooseLevel } id="5" style={{backgroundColor: "rgb(255,212,92)", border: '3px solid black' }}>basic</button>}
        {!(currentLevel == 5) && <button onClick={ chooseLevel } id="5">basic </button>}
        <span>5 cards</span>
      </div>

      <div className="level">
        { (currentLevel == 10) && <button onClick={ chooseLevel } id="10" style={{backgroundColor: "rgb(255,212,92)", border: '3px solid black' }}>easy</button>}
        {!(currentLevel == 10) && <button onClick={ chooseLevel } id="10">easy </button>}
        <span>10 cards</span>
      </div>

      <div className="level">
        { (currentLevel == 15) && <button onClick={ chooseLevel } id="15" style={{backgroundColor: "rgb(255,212,92)", border: '3px solid black' }}>normal</button>}
        {!(currentLevel == 15) && <button onClick={ chooseLevel } id="15">normal </button>}
        <span>15 cards</span>
      </div>   

      <div className="level">
        { (currentLevel == 20) && <button onClick={ chooseLevel } id="20" style={{backgroundColor: "rgb(255,212,92)", border: '3px solid black' }}>normal</button>}
        {!(currentLevel == 20) && <button onClick={ chooseLevel } id="20">normal </button>}
        <span>20 cards</span>
      </div>  

      <div className="level">
        { (currentLevel == 30) && <button onClick={ chooseLevel } id="30" style={{backgroundColor: "rgb(255,212,92)", border: '3px solid black' }}>heroic</button>}
        {!(currentLevel == 30) && <button onClick={ chooseLevel } id="30">heroic </button>}
        <span>30 cards</span>
      </div>    

      <div className="level">
        { (currentLevel == 40) && <button onClick={ chooseLevel } id="40" style={{backgroundColor: "rgb(255,212,92)", border: '3px solid black' }}>hellish</button>}
        {!(currentLevel == 40) && <button onClick={ chooseLevel } id="40">hellish </button>}
        <span>40 cards</span>
      </div>  
    </div>
  );
}

export default Levels;