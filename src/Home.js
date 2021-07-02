import React, { useEffect } from "react";
import { useGlobalContext } from "./context";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Typography,
  Container,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
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
    padding: "3rem",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Paper>
      <Container className={classes.main}>
        <Box>
          <Typography variant="h1">Quiz Game</Typography>
        </Box>
        <Box>
          <Typography variant="h2">Are you in mood?</Typography>
        </Box>
      </Container>
    </Paper>
  );
};

export default Home;
