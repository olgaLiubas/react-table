import React, { useContext, useReducer } from "react";

const DropdownsContext = React.createContext();

export const useDropdownsContext = () => {
  return useContext(DropdownsContext);
};

const SET_DROPDOWNS_STATUSES = "setDropdownsStatuses";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_DROPDOWNS_STATUSES:
      return { ...state, dropdownsStatuses: action.newDropdownsStatuses };
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
    dispatch({ type: SET_DROPDOWNS_STATUSES, newDropdownsStatuses });

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
