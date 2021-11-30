import { SET_STATUS } from "redux/types";

const initialState = {
  isFilter: false,
  isModal: false,
  isMenuColumn: null,
};

export const UIReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STATUS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
