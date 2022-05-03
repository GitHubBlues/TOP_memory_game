import React, { useState } from "react";
import "./score.css";

const Score = ( {currentScore} ) => {
  
    return(
      <div className="score-container">
          <h2 className="score-title">Score</h2>
          <div className="score-value">{currentScore}</div>
      </div>
    );
}

export default Score;

