import React, { useEffect } from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import bagPersonalOff from "./bag-personal-off.png";
import bagPersonal from "./bag-personal.png";
import {
  Box,
  Grid,
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
import { useUserContext } from "./user_context";

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
  MuiButton: {
    borderRadius: "var(--radius)",
    borderColor: "transparent",
    display: "block",
    minWidth: "170px",
    marginLeft: "auto",
    marginTop: "2rem",
    textTransform: "capitalize",
    fontWeight: 700,
    letterSpacing: "var(--spacing)",
    fontSize: "1rem",
    background: "var(--clr-primary-pink)",
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
  iconButton: {
    marginTop: "2rem",
    color: "#dc2373",
  },
}));

const Home = () => {
  const classes = useStyles();
  const { handleChange, error, clearAnswers } = useGlobalContext();
  const { is_stored, user_game, clearStorage, showStorage } = useUserContext();

  useEffect(() => {
    if (localStorage.getItem("user_game", JSON.stringify) === null) {
      clearStorage();
    } else showStorage();
  }, []);

  return (
    <main style={{ height: "90vh" }}>
      <Paper className={classes.main}>
        <Container className={classes.container}>
          <form className={classes.formSetup}>
            <Box>
              <Typography variant="h1">Quiz Game</Typography>
            </Box>
            <Box>
              <Typography variant="h2">Are you in the mood?</Typography>
            </Box>
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
            <Grid container spacing={3}>
              <Grid item xs>
                <Paper></Paper>
              </Grid>
              <Grid item xs>
                <Link to="/quiz">
                  <Button type="button" className={classes.MuiButton}>
                    PLAY
                  </Button>
                </Link>
              </Grid>
              <Grid item xs>
                {!is_stored ? (
                  <Button className={classes.iconButton}>
                    <img src={bagPersonalOff} alt="out of results" />
                  </Button>
                ) : (
                  <Link to="/storedresult">
                    <Button className={classes.iconButton}>
                      <img src={bagPersonal} alt="check the last results" />
                    </Button>
                  </Link>
                )}
              </Grid>
            </Grid>
          </form>
        </Container>
      </Paper>
    </main>
  );
};

export default Home;
