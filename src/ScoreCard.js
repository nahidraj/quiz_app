import React from "react";

const ScoreCard = ({ totalScore, resetQuiz }) => {
  return (
    <div className="result">
      <h5>Result Page</h5>
      <p>Result: {totalScore}</p>
      <button onClick={resetQuiz} className="btn btn-danger">
        Reset quiz
      </button>
    </div>
  );
};

export default ScoreCard;
