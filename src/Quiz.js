import React, { useEffect } from "react";
import { useGlobalContext } from "./context";
import { Box, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Starter from "./Starter";
import Loading from "./Loading";
import Modal from "./Modal";
import { useUserContext } from "./user_context";

const useStyles = makeStyles({
  quiz: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "60vw",
    minHeight: "450px",
    maxWidth: "var(--max-width)",
    margin: "4rem auto",
    background: "var(--clr-yellow)",
    borderRadius: "var(--radius)",
    padding: "2rem",
  },
  container: {
    h2: {
      marginBottom: "2rem",
      textAlign: "center",
      lineHeight: 1.5,
      textTransform: "none",
    },
  },
  answerBtn: {
    borderRadius: "var(--radius)",
    borderColor: "transparent",
    padding: "0.25rem 0",
    display: "block",
    width: "80%",
    margin: "0.75rem auto",
    letterSpacing: "var(--spacing)",
    fontSize: "1rem",
    background: "var(--clr-blue)",
    color: "var(--clr-black)",
    transition: "var(--transition)",
    cursor: "pointer",
  },
});

const Quiz = () => {
  const classes = useStyles();
  const { waiting, loading, questions, index, checkAnswer, correctAnswers } =
    useGlobalContext();
  const { clearStorage } = useUserContext();

  if (waiting) {
    return <Starter />;
  }
  if (loading) {
    return <Loading />;
  }

  const { question, incorrect_answers, correct_answer } = questions[index];
  //const allAnswers = [...incorrect_answers, correct_answer];
  let answers = [...incorrect_answers];
  const tempIndex = Math.floor(Math.random() * 4);
  if (tempIndex === 3) {
    answers.push(correct_answer);
  } else {
    answers.push(answers[tempIndex]);
    answers[tempIndex] = correct_answer;
  }

  const handleAnswer = (e) => {
    checkAnswer(e.target.value);
    correctAnswers(e.target.value === correct_answer);
  };

  return (
    <main style={{ display: "flex", justifyContent: "center" }}>
      <Modal />
      <Container className={classes.quiz}>
        <Box className="container">
          <Typography
            style={{ textAlign: "center" }}
            variant="h4"
            dangerouslySetInnerHTML={{ __html: question }}
          />
        </Box>
        <Box marginTop={4} display="flex" flexDirection="column">
          {answers.map((answer, index) => {
            return (
              <button
                key={index}
                className="answer-btn"
                value={answer}
                onClick={(e) => handleAnswer(e)}
                dangerouslySetInnerHTML={{ __html: answer }}
              />
            );
          })}
        </Box>
      </Container>
    </main>
  );
};

export default Quiz;
