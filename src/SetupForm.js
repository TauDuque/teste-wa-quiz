import React, { useEffect } from "react";
import { useGlobalContext } from "./context";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
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
  quiz: {
    alignItems: "center",
    width: "60vw",
    height: "450px",
    display: "flex",
    justifyContent: "center",
    maxWidth: "var(--max-width)",
    margin: "4rem auto",
    background: "var(--clr-yellow)",
    borderRadius: "var(--radius)",
    padding: "3rem",
  },
  formSetup: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  formInput: {
    border: "none",
    background: "var(--clr-grey-2)",
    fontSize: "1rem",
    padding: "0.25rem 0.5rem",
    width: "100%",
    borderRadius: "var(--radius)",
  },
  nextBtn: {
    borderRadius: "var(--radius)",
    borderColor: "transparent",
    padding: "0.25rem 0.5rem",
    display: "block",
    width: "35%",
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
  error: {
    color: "var(--clr-red-dark)",
    textTransform: "capitalize",
  },
  MuiInputFormControl: {
    width: theme.spacing(32),
  },
  MuiFormLabel: {
    color: "#312d28",
    textTransform: "capitalize",
    fontWeight: 500,
  },
}));

const SetupForm = () => {
  const classes = useStyles();
  const { quiz, handleChange, handleSubmit, error, clearAnswers } =
    useGlobalContext();
  useEffect(() => {
    clearAnswers();
  }, []);
  return (
    <main>
      <Container className={classes.quiz}>
        <form className={classes.formSetup}>
          <Typography variant="h1">Quiz Stater</Typography>
          <Box>
            <FormControl className={classes.MuiInputFormControl}>
              <InputLabel className={classes.MuiFormLabel}>
                questions
              </InputLabel>
              <Select
                onChange={handleChange}
                name="amount"
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
              >
                <MenuItem value="4">4</MenuItem>
                <MenuItem value="6">6</MenuItem>
                <MenuItem value="8">8</MenuItem>
                <MenuItem value="10">10</MenuItem>
              </Select>
              <FormHelperText>Choose the Number of Questions </FormHelperText>
            </FormControl>
          </Box>

          {error && (
            <Typography variant="body1" className={classes.error}>
              can't generate questions, please try different options
            </Typography>
          )}
          <Button
            type="submit"
            onClick={handleSubmit}
            className={classes.nextBtn}
          >
            play
          </Button>
        </form>
      </Container>
    </main>
  );
};

export default SetupForm;
