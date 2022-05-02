import React, { useState } from "react";
import "./card-container.css";
import generateCardData from "./generateDB.js";

const CardContainer = () => {
  const [allCardDB, setAllCardDB] = useState( generateCardData() );  
  

  const displayCards = () => {
    let tmp = [];
    for (let i=0; i<23; i++){
      tmp.push(<img src = { allCardDB[i].name } key={ allCardDB[i].id } /> );  
    } 
     return tmp; 
  };

  return(
    <div>
      { displayCards() }
    </div>
  );
};

export default CardContainer;
