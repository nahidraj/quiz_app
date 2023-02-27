import { useState } from "react";
import QuestionCard from "./QuestionCard";
import ScoreCard from "./ScoreCard";
import ShuffleAnswer from "./ShuffleAnswer";

function App() {
  const [quizzes, setQuizzes] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [startQuiz, setStartQuiz] = useState(false);
  const [currentAnswers, setCurrentAnswers] = useState(null);
  const [endGame, setEndGame] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [pickedAnswer, setPickedAnswer] = useState(null);

  const pickAnswer = (answer) => {
    setPickedAnswer(answer);
    if (answer === correctAnswer) {
      setTotalScore((prevScore) => prevScore + 1);
    }
  };

  const navigateNext = () => {
    const currentQuizIndex = currentQuestionIndex + 1;
    const validQuestionIndex = currentQuizIndex < quizzes.length;

    if (validQuestionIndex) {
      setCurrentQuestionIndex(currentQuizIndex);
      const nextAnswer = quizzes[currentQuizIndex];
      setCurrentAnswers(ShuffleAnswer(nextAnswer));
      setPickedAnswer(null);
      setCorrectAnswer(nextAnswer.correct_answer);
    } else {
      setEndGame(true);
    }
  };

  const fetchQuiz = async () => {
    const data = await fetch("https://opentdb.com/api.php?amount=5");
    const { results } = await data.json();
    setQuizzes(results);
    const initialAnswers = results[currentQuestionIndex];
    setCurrentAnswers(ShuffleAnswer(initialAnswers));
    setCorrectAnswer(initialAnswers.correct_answer);
    setLoaded(true);
    setStartQuiz(true);
    console.log(results);
  };

  const resetQuiz = () => {
    setQuizzes(null);
    setLoaded(false);
    setStartQuiz(false);
    setCurrentAnswers(null);
    setEndGame(false);
    setCurrentQuestionIndex(0);
    setTotalScore(0);
    setCorrectAnswer(null);
    setPickedAnswer(null);
  };
  return (
    <div className="container text-center mt-5">
      <div className="boxes">
        {endGame && <ScoreCard totalScore={totalScore} resetQuiz={resetQuiz} />}
        {!startQuiz && (
          <button onClick={fetchQuiz} className="btn btn-lg btn-success">
            Start Quiz
          </button>
        )}
        {loaded && !endGame && (
          <QuestionCard
            quizzes={quizzes}
            quiz={quizzes[currentQuestionIndex]}
            currentAnswers={currentAnswers}
            currentQuestionIndex={currentQuestionIndex}
            navigateNext={navigateNext}
            correctAnswer={correctAnswer}
            pickedAnswer={pickedAnswer}
            pickAnswer={pickAnswer}
          />
        )}
      </div>
    </div>
  );
}

export default App;
