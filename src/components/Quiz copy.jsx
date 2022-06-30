import { QuestionAnswer } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { dataQuiz } from "../utils/dataQuiz";
import "./Quiz.css";

export const Quiz = () => {
  const data = dataQuiz;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < data.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const refresh = ()=> {
      setCurrentQuestion(0)
      setScore(0)
      setShowScore(false)
  }

  return (
    <>
      <div className="quiz_body">
        <div className="quizz">
          {showScore 
           ? <div className="section_score">
              <div>
                Сorrect answers {score} from {data.length}
              </div>
              <Button onClick={refresh}>Refresh</Button>
            </div>
           : 
            <div className="question_section">
              <div className="question_count">
                <span>Question {currentQuestion + 1} </span> / {data.length}
              </div>
              <div className="question_text">
                {data[currentQuestion].questionText}
              </div>
              <div className="answer_section">
                {data[currentQuestion].answerOptions.map((item) => (
                  <Button
                    onClick={() => handleAnswerOptionClick(item.isCorrect)}
                  >
                    {item.answerText}
                  </Button>
                ))}
              </div>
            </div>
          }
        </div>
      </div>
    </>
  );
};
