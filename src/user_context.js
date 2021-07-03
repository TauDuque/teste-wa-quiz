import React, { useState, useContext, useReducer, useEffect } from "react";
import reducer from "./user_reducer";
import { useGlobalContext } from "./context";
import {
  STORE_GAME,
  CLEAR_STORAGE,
  RESULT_STORED,
  RESULT_NOT_STORED,
} from "./actions";

const getLocalStorage = () => {
  let user_game = localStorage.getItem("user_game");
  if (user_game) {
    return JSON.parse(localStorage.getItem("user_game"));
  } else {
    return [];
  }
};

const initialState = {
  user_game: getLocalStorage(),
  is_stored: false,
};

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const { quiz_questions, correct, user_answers } = useGlobalContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  const storeGame = (user_answers, quiz_questions, correct) => {
    dispatch({ type: RESULT_STORED });
    dispatch({
      type: STORE_GAME,
      payload: { user_answers, quiz_questions, correct },
    });
  };

  const clearStorage = () => {
    localStorage.removeItem("user_game");
    dispatch({ type: RESULT_NOT_STORED });
    dispatch({ type: CLEAR_STORAGE });
  };

  /*const showStorage = () => {
    dispatch({ type: RESULT_STORED });
  }; */

  useEffect(() => {
    localStorage.setItem("user_game", JSON.stringify(state.user_game));
  }, [state.user_game]);

  return (
    <UserContext.Provider
      value={{ ...state, storeGame, clearStorage /*, showStorage */ }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};

export { UserContext, UserProvider };
