import React from "react";
import { useGlobalContext } from "./context";
import { Box, Button, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  modalContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    background: "var(--clr-white)",
    width: "60vw",
    minHeight: "400px",
    maxWidth: "var(--fixed-width)",
    padding: theme.spacing(2),
    borderRadius: "var(--radius)",
    textAlign: "center",
    alignItems: "center",
    position: "relative",
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
}));

const Modal = () => {
  const classes = useStyles();
  const { isModalOpen, closeModal, correct, questions } = useGlobalContext();
  return (
    <div
      className={`${
        isModalOpen ? "modal-container isOpen" : "modal-container"
      }`}
    >
      <Box className={classes.modalContent}>
        <Typography variant="h2">Thank's for playing!!!</Typography>
        <Typography variant="body1">
          You answered {((correct / questions.length) * 100).toFixed(0)}% of
          questions correctly
        </Typography>
        <Box display="flex">
          <Box marginRight={3}>
            <Button className={classes.MuiButton} onClick={closeModal}>
              play again
            </Button>
          </Box>
          <Button className={classes.MuiButton} onClick={closeModal}>
            <Link className={classes.MuiButtonLabel} to="/answersreport">
              Answers Report
            </Link>
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Modal;
