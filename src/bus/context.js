import React, { useContext, useReducer } from "react";

const MyContext = React.createContext();

export const useTableContext = () => {
  return useContext(MyContext);
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setDropdownsStatuses":
      return { ...state, dropdownsStatuses: action.newDropdownsStatuses };
    default:
      return state;
  }
};

export const MyContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    dropdownsStatuses: {
      isFilter: false,
      isModal: false,
      isMenuColumn: null,
    },
  });

  const setDropdownsStatuses = (newDropdownsStatuses) =>
    dispatch({ type: "setDropdownsStatuses", newDropdownsStatuses });

  return (
    <MyContext.Provider
      value={{
        dropdownsStatuses: state.dropdownsStatuses,
        setDropdownsStatuses,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
