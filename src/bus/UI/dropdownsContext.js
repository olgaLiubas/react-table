import { useContext, useReducer } from "react";

import DropdownsContext from "bus/UI/creatorContext";
import actionTypes from "bus/UI/actionTypes";

export const useDropdownsContext = () => {
  return useContext(DropdownsContext);
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_DROPDOWNS_STATUSES:
      return { ...state, dropdownsStatuses: action.payload };
    default:
      return state;
  }
};

export const DropdownsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    dropdownsStatuses: {
      isFilter: false,
      isModal: false,
      isMenuColumn: null,
    },
  });

  const setDropdownsStatuses = (newDropdownsStatuses) =>
    dispatch({
      type: actionTypes.SET_DROPDOWNS_STATUSES,
      payload: newDropdownsStatuses,
    });

  return (
    <DropdownsContext.Provider
      value={{
        dropdownsStatuses: state.dropdownsStatuses,
        setDropdownsStatuses,
      }}
    >
      {children}
    </DropdownsContext.Provider>
  );
};
