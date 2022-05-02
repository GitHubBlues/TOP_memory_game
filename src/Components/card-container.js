import React, { useState } from "react";
import "./card-container.css";
import generateCardData from "./generateDB.js";

const CardContainer = () => {
  const [allCardDB, setAllCardDB] = useState( generateCardData() );  
  

  const handleclick = (event) => {
    let newDatabase = JSON.parse(JSON.stringify(allCardDB));
    const card = allCardDB.findIndex(element => element.id === event.target.className);
    if (allCardDB[card].selected) {
      console.log("OOps");
    } else {
      newDatabase[card].selected = true;
      setAllCardDB(newDatabase);
      console.log("Well done");
    }
  };


  const displayCards = () => {
    let tmp = [];
    for (let i=0; i<23; i++){
      tmp.push(<img src = { allCardDB[i].name } key={ allCardDB[i].id } onClick={ handleclick } className={ allCardDB[i].id }/> );  
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
