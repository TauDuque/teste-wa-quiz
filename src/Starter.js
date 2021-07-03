import React, { useEffect } from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Container, Button } from "@material-ui/core";
import { useUserContext } from "./user_context";

const useStyles = makeStyles((theme) => ({
  quiz: {
    alignItems: "center",
    width: "60vw",
    height: "450px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: "var(--max-width)",
    margin: "4rem auto",
    background: "var(--clr-yellow)",
    borderRadius: "var(--radius)",
    padding: "2rem",
  },

  nextBtn: {
    borderRadius: "var(--radius)",
    borderColor: "transparent",
    padding: "0.25rem 0.5rem",
    display: "block",
    minWidth: "170px",
    marginLeft: "auto",
    marginTop: "0",
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

  MuiButtonLabel: {
    color: "var(--clr-black)",
    textDecoration: "none",
  },
}));

const Starter = () => {
  const classes = useStyles();
  const { handleSubmit, clearAnswers } = useGlobalContext();

  useEffect(() => {
    clearAnswers();
  }, []);

  return (
    <main>
      <Container className={classes.quiz}>
        <Box marginTop={4} paddinTop={3}>
          <Typography marginTop style={{ textAlign: "center" }} variant="h1">
            Quiz Starter
          </Typography>
          <Typography marginTop style={{ textAlign: "center" }} variant="body1">
            Press "Cancel" to go back or "Start" to go ahead
          </Typography>
        </Box>
        <Box display="flex" marginTop={7}>
          <Box marginRight={4}>
            <Button
              type="submit"
              onClick={clearAnswers}
              className={classes.nextBtn}
            >
              <Link to="/" className={classes.nextBtn}>
                CANCEL
              </Link>
            </Button>
          </Box>
          <Button
            type="submit"
            onClick={handleSubmit}
            className={classes.nextBtn}
          >
            START
          </Button>
        </Box>
      </Container>
    </main>
  );
};

export default Starter;
