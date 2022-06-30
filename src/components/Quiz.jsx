import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
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

  const refresh = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: " center",
          alignItems: "center",
          marginTop: "45px",
          marginBottom: "45px",
        }}
      >
        <Card
          sx={{
            height: "100%",
            width: 450,
            objectFit: "center",
            boxShadow: "1px 0px 20px 0px rgba(0, 0, 0, 0.50)",
          }}
        >
          {showScore ? (
            <div>
              <Typography variant="h5" sx={{ padding: "8px" }}>
                Сorrect answers {score} from {data.length}
              </Typography>
              <CardMedia
                sx={{ paddingTop: "50%" }}
                image={`https://storage.theoryandpractice.ru/tnp/uploads/image_unit/000/156/218/image/base_ad2aff6a0a.jpg`}
              />
              <CardContent>
                <Typography></Typography>
              </CardContent>
              <CardActions>
                <Button onClick={refresh}>Refresh</Button>
              </CardActions>
            </div>
          ) : (
            <div>
              <Typography variant="h5" sx={{ padding: "8px" }}>
                Question {currentQuestion + 1}/ {data.length}
              </Typography>
              <CardMedia
                sx={{ maxHeight: 200, paddingTop: "50%" }}
                image={data[currentQuestion].image}
              />
              <CardContent>
                <Typography> {data[currentQuestion].questionText}</Typography>
              </CardContent>
              <CardActions>
                {data[currentQuestion].answerOptions.map((item) => (
                  <Button
                    color="success"
                    sx={{ borderRadius: "15px" }}
                    onClick={() => handleAnswerOptionClick(item.isCorrect)}
                  >
                    {item.answerText}
                  </Button>
                ))}
              </CardActions>
            </div>
          )}
        </Card>
      </Container>
    </>
  );
};
