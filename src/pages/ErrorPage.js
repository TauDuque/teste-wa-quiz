import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Paper, Typography, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    width: "60vw",
    minHeight: "450px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "var(--max-width)",
    margin: "4rem auto",
    textAlign: "center",
    justifyContent: "center",
    background: "var(--clr-yellow)",
    borderRadius: "var(--radius)",
    padding: "1rem",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const ErrorPage = () => {
  const classes = useStyles();
  const history = useHistory();

  setTimeout(() => {
    history.push("/");
  }, 2700);

  return (
    <main style={{ height: "90vh" }}>
      <Paper className={classes.main}>
        <Container className={classes.container}>
          <Box>
            <Typography variant="h2">There was a error...</Typography>
          </Box>
          <Box marginTop={5}>
            <Typography
              marginTop
              style={{ textAlign: "center" }}
              variant="body1"
            >
              you'll be redirected...
            </Typography>
          </Box>
        </Container>
      </Paper>
    </main>
  );
};

export default ErrorPage;
