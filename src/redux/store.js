import { createStore } from "redux";

const initialState = {
  email: "",
  password: ""
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
}

const store = createStore(
  userReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
