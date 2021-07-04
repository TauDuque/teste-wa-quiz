import React, { useContext, useReducer, useEffect } from "react";
import reducer from "../reducer/user_reducer";
import { STORE_GAME, CLEAR_STORAGE } from "../actions";

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
};

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const storeGame = (user_answers, quiz_questions, correct) => {
    dispatch({
      type: STORE_GAME,
      payload: { user_answers, quiz_questions, correct },
    });
  };

  const clearStorage = () => {
    localStorage.removeItem("user_game");
    dispatch({ type: CLEAR_STORAGE });
  };

  useEffect(() => {
    localStorage.setItem("user_game", JSON.stringify(state.user_game));
  }, [state.user_game]);

  return (
    <UserContext.Provider value={{ ...state, storeGame, clearStorage }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};

export { UserContext, UserProvider };
