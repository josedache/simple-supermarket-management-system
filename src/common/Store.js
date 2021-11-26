import { useReducer } from "react";
import { StoreRef, StoreActionTypeEnum } from "./Constants";
import StoreContext from "./StoreContext";

function Store(props) {
  const store = useReducer(reducer, INITIAL_STATE);
  StoreRef.current = {
    getState: () => Object.assign({}, store[0]),
    dispatch: store[1],
  };

  return (
    <StoreContext.Provider value={store}>
      {props.children}
    </StoreContext.Provider>
  );
}

export default Store;

/** @type {import("./StoreContext").StoreState} */
const INITIAL_STATE = {
  theme: "media",
  accessToken: "KJFB2IU3YEUDD",
};

/**
 *
 * @param {import("./StoreContext").StoreState} state
 * @param {*} action
 * @returns
 */
function reducer(state, action) {
  switch (action.type) {
    case StoreActionTypeEnum.SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
}
