import React from "react";
import "./card-container.css";
import { shuffle } from "./utils.js";

const CardContainer = ({ allDB, selectedDB, setAllDB, setModal, currentScore, setScore, currentLevel }) => {
    const handleclick = (event) => {
        let newDatabase = JSON.parse(JSON.stringify(allDB));
        const card = allDB.findIndex((element) => element.id === event.target.className);
        if (allDB[card].selected) {
            setModal(true);
        } else {
            newDatabase[card].selected = true;
            setScore(currentScore + 1);
            setAllDB(newDatabase);
            if (currentScore == currentLevel - 1) {
                setModal(true);
            }
        }
    };

    const displayCards = () => {
        let db = shuffle(selectedDB);
        let idx;
        let tmp = [];
        for (let i = 0; i < currentLevel; i++) {
            idx = allDB.findIndex((object) => {
                return object.id === db[i];
            });
            tmp.push(
                <img
                    src={allDB[idx].name}
                    key={allDB[idx].id}
                    onClick={handleclick}
                    className={allDB[idx].id}
                    draggable="false"
                    alt={allDB[idx].desc}
                />
            );
        }
        return tmp;
    };

    return <div className="card-container">{displayCards()}</div>;
};

export default CardContainer;