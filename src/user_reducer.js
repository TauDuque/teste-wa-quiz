import {
  STORE_GAME,
  CLEAR_STORAGE,
  RESULT_STORED,
  RESULT_NOT_STORED,
} from "./actions";

const UserReducer = (state, action) => {
  if (action.type === STORE_GAME) {
    const { user_answers, quiz_questions, correct } = action.payload;
    const game = {
      quiz_questions,
      user_answers,
      correct,
    };
    return { ...state, user_game: [...state.user_game, game] };
  }

  if (action.type === CLEAR_STORAGE) {
    localStorage.removeItem("user_game");
    return { ...state, user_game: [], correct: 0 };
  }

  if (action.type === RESULT_STORED) {
    return { ...state, is_stored: true };
  }

  if (action.type === RESULT_NOT_STORED) {
    return { ...state, is_stored: false };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default UserReducer;
