import React, { useState, useEffect } from "react";
import "./App.css";
import Score from "./Components/score.js";
import Levels from "./Components/level.js";
import Title from "./Components/title.js";
import Instructions from "./Components/instructions.js";
import CardContainer from "./Components/card-container.js";
import Modal from "./Components/modal.js";
import generateCardData from "./Components/generateDB.js";
import { shuffle, selectCards } from "./Components/utils.js";

function App() {
    const [allCardDB, setAllCardDB] = useState(generateCardData());
    const [selectedDB, setSelectedDB] = useState(["id-05", "id-07", "id-08", "id-09", "id-10"]);
    const [modalState, setModalState] = useState(false);
    const [currentScore, setScore] = useState(0);
    const [currentLevel, setLevel] = useState(5);

    useEffect(() => {
        if (currentScore == 0) {
            let allCardDB = shuffle(generateCardData());
            setAllCardDB(allCardDB);
            setSelectedDB(selectCards(currentLevel, allCardDB));
        }
    }, [currentScore]);

    return (
        <div className="App">
            <div className="left-container">
                <Score currentScore={currentScore} />
                <Levels
                    currentLevel={currentLevel}
                    setLevel={setLevel}
                    setScore={setScore}
                    setAllCardDB={setAllCardDB}
                    setSelectedDB={setSelectedDB}
                />
            </div>
            <div className="right-container">
                <Title />
                <Instructions />
                <CardContainer
                    allDB={allCardDB}
                    selectedDB={selectedDB}
                    setAllDB={setAllCardDB}
                    setModal={setModalState}
                    currentScore={currentScore}
                    setScore={setScore}
                    currentLevel={currentLevel}
                />
            </div>
            {modalState && (
                <Modal
                    setModal={setModalState}
                    setAllDB={setAllCardDB}
                    currentScore={currentScore}
                    setScore={setScore}
                    currentLevel={currentLevel}
                    SetSelectedDB={setSelectedDB}
                />
            )}
        </div>
    );
}

export default App;