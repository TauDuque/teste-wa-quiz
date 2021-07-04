import {
  ADD_ANSWER,
  STORE_QUIZ,
  CLEAR_ANSWER,
  SHOW_LOGO,
  HIDE_LOGO,
} from "../actions";

const reducer = (state, action) => {
  if (action.type === ADD_ANSWER) {
    const newItem = action.payload;
    return { ...state, user_answers: [...state.user_answers, newItem] };
  }
  if (action.type === STORE_QUIZ) {
    return { ...state, quiz_questions: action.payload };
  }
  if (action.type === CLEAR_ANSWER) {
    return { ...state, user_answers: [], correct: 0 };
  }
  if (action.type === SHOW_LOGO) {
    return { ...state, show_logo: true };
  }
  if (action.type === HIDE_LOGO) {
    return { ...state, show_logo: false };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default reducer;
