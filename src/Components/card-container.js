import React, { useState } from "react";
import "./card-container.css";

const CardContainer = ( { allDB, setAllDB, setModal } ) => {


  const handleclick = (event) => {
    let newDatabase = JSON.parse(JSON.stringify(allDB));
    const card = allDB.findIndex(element => element.id === event.target.className);
    if (allDB[card].selected) {
      setModal( true );
    } else {
      newDatabase[card].selected = true;
      setAllDB(newDatabase);
      console.log("Well done");
    }
  };


  const displayCards = () => {
    let tmp = [];
    for (let i=0; i<23; i++){
      tmp.push(<img src = { allDB[i].name } key={ allDB[i].id } onClick={ handleclick } className={ allDB[i].id }/> );  
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
