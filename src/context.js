import axios from "axios";
import React, { useState, useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
import { ADD_ANSWER, STORE_QUIZ, CLEAR_ANSWER } from "./actions";

const API_ENDPOINT = "https://opentdb.com/api.php?";

const url = "";
const tempUrl = "https://opentdb.com/api.php?amount=4&type=multiple";
const AppContext = React.createContext();

const initialState = {
  user_answers: [],
  quiz_questions: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [waiting, setWaiting] = useState(true);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [error, setError] = useState(false);
  const [quiz, setQuiz] = useState({
    amount: 6,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchQuestions = async (url) => {
    setLoading(true);
    setWaiting(false);
    const response = await axios(url).catch((err) => console.log(err));
    if (response) {
      const data = response.data.results;
      if (data.length > 0) {
        setQuestions(data);
        setLoading(false);
        setWaiting(false);
        setError(false);
        dispatch({ type: STORE_QUIZ, payload: data });
      } else {
        setWaiting(true);
        setError(true);
      }
    } else {
      setWaiting(true);
    }
  };

  const nextQuestion = () => {
    setIndex((oldIndex) => {
      const index = oldIndex + 1;
      if (index > questions.length - 1) {
        openModal();
        return 0;
      } else {
        return index;
      }
    });
  };

  const checkAnswer = (value) => {
    dispatch({ type: ADD_ANSWER, payload: value });
    nextQuestion();
  };

  const correctAnswers = (value) => {
    if (value) {
      setCorrect((oldState) => oldState + 1);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setWaiting(true);
    setIsModalOpen(false);
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuiz({ ...quiz, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { amount } = quiz;
    const url = `${API_ENDPOINT}amount=${amount}&type=multiple`;
    fetchQuestions(url);
  };

  const clearAnswers = () => {
    dispatch({ type: CLEAR_ANSWER });
    setWaiting(true);
  };

  useEffect(() => {
    setCorrect(0);
  }, [loading]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        waiting,
        loading,
        questions,
        index,
        error,
        isModalOpen,
        nextQuestion,
        checkAnswer,
        closeModal,
        quiz,
        handleChange,
        handleSubmit,
        clearAnswers,
        correctAnswers,
        correct,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
