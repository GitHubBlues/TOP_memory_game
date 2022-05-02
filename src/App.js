import './App.css';
import Score from "./Components/score.js";
import Levels from "./Components/level.js";
import Title from "./Components/title.js";
import Instructions from "./Components/instructions.js";
import CardContainer from "./Components/card-container.js";

function App() {
  return (
    <div className="App">
      <div className="left-container">
        <Score />
        <Levels />  
      </div>
      <div className="right-container">
        <Title />
        <Instructions />
        <CardContainer />
      </div>
    </div>
  );
}

export default App;
