import React from "react";
import AnswerCard from "./AnswerCard";

const QuestionCard = ({
  quiz,
  currentAnswers,
  currentQuestionIndex,
  quizzes,
  navigateNext,
  pickAnswer,
  correctAnswer,
  pickedAnswer,
}) => {
  return (
    <div className="question-card">
      <h5>
        Questions: {currentQuestionIndex + 1} / {quizzes.length}
      </h5>
      <h3>{quiz.question}</h3>
      {currentAnswers.map((answer, index) => (
        <AnswerCard
          key={index}
          answer={answer}
          pickAnswer={pickAnswer}
          correctAnswer={correctAnswer}
          pickedAnswer={pickedAnswer}
        />
      ))}
      <button onClick={navigateNext} className="btn btn-secondary btn-lg mt-3">
        Next
      </button>
    </div>
  );
};

export default QuestionCard;
