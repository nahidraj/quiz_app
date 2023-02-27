import React from "react";

const AnswerCard = ({ answer, pickAnswer, correctAnswer, pickedAnswer }) => {
  const isRight = pickedAnswer && answer === correctAnswer;
  const isWrong =
    pickedAnswer && answer === pickedAnswer && pickedAnswer !== correctAnswer;
  const correctClass = isRight ? "correct-answer" : "";
  const wrongClass = isWrong ? "incorrect_answer" : "";
  const disabled = pickedAnswer && "disabled_answer";

  return (
    <div
      className={`quiz-answer ${correctClass} ${wrongClass} ${disabled}`}
      onClick={() => pickAnswer(answer)}
    >
      {answer}
    </div>
  );
};

export default AnswerCard;
