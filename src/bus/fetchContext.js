import React, { useEffect, useContext, useReducer } from "react";
import axios from "axios";

const FetchContext = React.createContext();

export const useFetchContext = () => {
  return useContext(FetchContext);
};

const SET_COUNTRIES = "setCountries";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_COUNTRIES:
      return { ...state, countries: action.newCountries };
    default:
      return state;
  }
};

export const FetchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    countries: [],
  });

  const useSetCountries = (
    url = "http://localhost:4000/countries?_sort=id&_order=asc&_limit=20&_page=1"
  ) => {
    useEffect(() => {
      (async () => {
        try {
          const response = await axios.get(url);
          const newCountries = response.data;
          dispatch({ type: SET_COUNTRIES, newCountries });
        } catch (e) {
          alert(`Sorry, something go wrong. Try later! 
          ${e}`);
        }
      })();
    }, [url]);
  };

  return (
    <FetchContext.Provider
      value={{
        countries: state.countries,
        useSetCountries,
      }}
    >
      {children}
    </FetchContext.Provider>
  );
};
