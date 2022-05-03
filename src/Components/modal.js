import React from "react"
import "./modal.css"

const Modal = ( { setModal, setAllDB } ) => {

    function closeModal(){
      setModal(false);
    }
    
    function createContent() {
       return ( <h1 className="modal-title">Congratulations!</h1> )
    }
        
      
    return (
        <div className="modal-background">  
            <div className="modal">
                <button onClick={closeModal} className="x-close">X</button>
                    { createContent() }
                <h1 className="modal-text">You scored XXX out of XXX</h1>
                <button onClick={closeModal} className="btn-close">Close</button>
            </div>
        </div>
  );
};

export default Modal;