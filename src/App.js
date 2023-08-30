import React, { useState } from "react";
import "./App.css";

function App() {

  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "telengana capital city?",
      options: [
        { id: 0, text: "delhi", isCorrect: false },
        { id: 1, text: "chennai", isCorrect: false },
        { id: 2, text: "mumbai", isCorrect: false },
        { id: 3, text: "hyderabad", isCorrect: true },
      ],
    },
    {
      text: "capital of maharastra?",
      options: [
        { id: 0, text: "mumbai", isCorrect: true },
        { id: 1, text: "hyderabad", isCorrect: false },
        { id: 2, text: "banglore", isCorrect: false },
        { id: 3, text: "chennai", isCorrect: false },
      ],
    },
    {
      text: "capital of uk ?",
      options: [
        { id: 0, text: "ameerpet", isCorrect: false },
        { id: 1, text: "ambarpet", isCorrect: false },
        { id: 2, text: "nampally", isCorrect: false },
        { id: 3, text: "London", isCorrect: true },
      ],
    },
    {
      text: "capital of madya pradesh?",
      options: [
        { id: 0, text: "chennai", isCorrect: false },
        { id: 1, text: "bhopal", isCorrect: true },
        { id: 2, text: "banglore", isCorrect: false },
        { id: 3, text: "hyderbad", isCorrect: false },
      ],
    },
    {
      text: "capital of india india?",
      options: [
        { id: 0, text: "bhopal", isCorrect: false },
        { id: 1, text: "delhi", isCorrect: true },
        { id: 2, text: "kurnool", isCorrect: true },
        { id: 3, text: "banglore", isCorrect: false },
      ],
    },
  ];

  const optionClicked = (isCorrect) => {

    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
    
      <h1>Alphbet quiz</h1>

    
      <h2>Points: {score}</h2>

  
      {showResults ? (
  
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
      
        <div className="question-card">
      
          <h2>
            Question : {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

         
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
