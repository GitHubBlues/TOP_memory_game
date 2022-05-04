import React from "react" 
import "./modal.css"
import generateCardData from "./generateDB.js";
import { shuffle, selectCards } from "./utils.js";

const Modal = ( { setModal, setAllDB , currentScore, setScore, currentLevel, setSelectedDB } ) => {

    function closeModal(){
      setModal(false);
      setScore( 0 );
      let allCardDB = generateCardData(); 
      setAllDB( allCardDB );
    }
    
    function createContent() {
       if ( currentScore == currentLevel ) {
           return ( <h1 className="modal-title">Congratulations!</h1> )
       } else {
        return ( <h1 className="modal-title">Game over</h1> )
       }
    }

    return (
        <div className="modal-background">  
            <div className="modal">
                <button onClick={closeModal} className="x-close">X</button>
                    { createContent() }
                <h1 className="modal-text">You scored {currentScore} out of {currentLevel}</h1>
                <button onClick={closeModal} className="btn-close">Close</button>
            </div>
        </div>
  );
};

export default Modal;