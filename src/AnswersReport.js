import React, { useState, useEffect } from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import {
  Box,
  Button,
  Typography,
  Container,
  Paper,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  main: {
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
  report: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  nextBtn: {
    borderRadius: "var(--radius)",
    borderColor: "transparent",
    padding: "0.25rem 0.5rem",
    display: "block",
    width: "250px",
    marginLeft: "auto",
    marginTop: "2rem",
    textTransform: "capitalize",
    fontWeight: 700,
    letterSpacing: "var(--spacing)",
    fontSize: "1rem",
    background: "#dc2373",
    backgroundImage:
      "linear-gradient(to right, transparent, rgba(0, 0, 0, 0.3))",
    color: "var(--clr-black)",
    transition: "var(--transition)",
    cursor: "pointer",
    "&:hover": {
      background: "var(--clr-black)",
      backgroundImage:
        "linear-gradient(to right, transparent, rgba(0, 0, 0, 0.3))",
      color: "#dc2373",
    },
  },
});
const AnswersReport = () => {
  const classes = useStyles();
  const { loading, questions, user_answers, clearAnswers, correct } =
    useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  return (
    <Paper className={classes.main}>
      <Container className={classes.report}>
        <Typography
          variant="h4"
          style={{ textTransform: "capitalize", color: "var(--clr-black)" }}
        >
          correct answers: {correct} /{questions.length}
        </Typography>
        <Divider />
        {questions.map((singleQuestion, i) => {
          const { question, incorrect_answers, correct_answer } =
            singleQuestion;
          return (
            <Box key={i} className="container" marginTop={2}>
              <Typography
                style={{ textAlign: "center" }}
                variant="h4"
                dangerouslySetInnerHTML={{ __html: question }}
              />
              <div className="btn-container">
                <button
                  className="correct-answers"
                  dangerouslySetInnerHTML={{ __html: correct_answer }}
                />
                <button
                  className={
                    user_answers[i] == incorrect_answers[0]
                      ? "user-answers"
                      : "answer-btn"
                  }
                  dangerouslySetInnerHTML={{ __html: incorrect_answers[0] }}
                />
                <button
                  className={
                    user_answers[i] == incorrect_answers[1]
                      ? "user-answers"
                      : "answer-btn"
                  }
                  dangerouslySetInnerHTML={{ __html: incorrect_answers[1] }}
                />
                <button
                  className={
                    user_answers[i] == incorrect_answers[2]
                      ? "user-answers"
                      : "answer-btn"
                  }
                  dangerouslySetInnerHTML={{ __html: incorrect_answers[2] }}
                />
              </div>
            </Box>
          );
        })}
        <Link to="/">
          <Button className={classes.nextBtn} onClick={clearAnswers}>
            go back
          </Button>
        </Link>
      </Container>
    </Paper>
  );
};

export default AnswersReport;
