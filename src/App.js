import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [numList, setNumList] = useState([10, 20, 30, 40]);
  //   const [readNum, setReadNum] = useState(0);
  const [randomNum, setRandomNum] = useState(0);

  const addNumbers = () => {
    setNumList([...numList, randomNum]);
    console.log(numList, randomNum);
  };

  const getRandomNum = () => {
    setRandomNum(Math.floor(Math.random() * 255));
  };

  return (
    <div className="main-container">
      <div className="input-container">
        <input disabled value={randomNum} />

        <button onClick={getRandomNum}>Click to Get Random NUmber</button>
        <button onClick={() => addNumbers(randomNum)}>
          Add random Number to List
        </button>
      </div>

      <div className="outPut-container">
        <h2>Your Random Numbers</h2>
        {numList.map((e, key) => (
          <div className="numList" key={key}>
            <p>{e}</p>
            <button className="close-btn">X</button>
          </div>
        ))}
      </div>
    </div>
  );
}
