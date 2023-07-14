// import logo from './logo.svg';
import "./App.css";
import questions from "../src/data/qustions.json";
import { useState } from "react";
import finishimg from "../src/images/finish.jpg";

export default function App() {
  let [currentQIndex, setCurrentQIndex] = useState(0);
  let [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  let [score , setScore]= useState(0)

  const nextQuestion = () => {
    setSelectedOptionIndex(null);
    setCurrentQIndex(currentQIndex + 1);
  };

  const previousQuestion = () => {
    if (currentQIndex > 0) {
      setCurrentQIndex(currentQIndex - 1);
    }
  };

  const restartQuiz = () => {
    setCurrentQIndex(0);
  };

  const onSelectedOption = (selectedOptionIndex) => {
    setSelectedOptionIndex(selectedOptionIndex);
     if (selectedOptionIndex === questions[currentQIndex].correctOptionIndex)
    setScore(score +1)
   
  };

  if (currentQIndex === questions.length) {
    return (
      <>
        <div className="container card-design">
          <div className="card">
            <img
              src={finishimg}
              className="card-img-top card-image"
              alt="..."
            />
            <div className="card-body" style={{ background: "beige" }}>
              <h1 className="card-title">Online Quiz</h1>
              <p className="card-text" style={{ fontSize: "20px" }}>
                Your Quiz is submitted successfuly
              </p>
  <h4>
              {score} out of {questions.length}
            </h4>
              <button className="btn btn-primary" onClick={restartQuiz}>
                Try Again
              </button>
              <button className="btn btn-primary" style={{ marginLeft: "5px" }}>
                Details
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container-fluid card-design">
        <div className="container">
          <h1>Online Quiz</h1>
          <div className="card" key={questions[currentQIndex]?.id}>
            <img src={questions[currentQIndex].icon} className="card-image" />
            <div className="card-header">
              <h5>
                {questions[currentQIndex].id}.{" "}
                {questions[currentQIndex]?.statement}
              </h5>
            </div>
            <div>
            <ul className="list-group list-group-flush">
              {questions[currentQIndex]?.options.map((options, index) => (
                <li
                  className={
                    selectedOptionIndex === index
                      ? "list-group-item active "
                      : "list-group-item"
                  }
                  key={index}
                  onClick={() => onSelectedOption(index)}
                >
                  {options}
                </li>
              ))}
            </ul>
            </div>
          </div>
          {/* </div> */}
          {/* <div
          class="progress my-1"
          role="progressbar"
          aria-label="Example with label"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div className="progress-bar" style={{ width: "20%" }}>
            20%
          </div>
        </div> */}
          <div className="container btn-design">
            <button className="btn btn-success" onClick={previousQuestion}>
              Previous Question
            </button>
            <button className="btn btn-success" onClick={nextQuestion}>
              Next Question
            </button>
          </div>
        </div>
      </div>
      <div>
      {/* Your quiz component goes here */}
      {/* Pass the handleQuizSubmit function to the component handling the quiz */}
      {/* After the quiz is submitted, the handleQuizSubmit function will be called with the quiz results */}


    </div>
    </>
  );
}
