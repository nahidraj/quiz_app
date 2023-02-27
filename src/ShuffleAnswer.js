import React from "react";

const ShuffleAnswer = (allAnswers) => {
  const answers = [allAnswers.correct_answer, ...allAnswers.incorrect_answers];
  for (let i = answers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [answers[i], answers[j]] = [answers[j], answers[i]];
  }
  return answers;
};

export default ShuffleAnswer;
