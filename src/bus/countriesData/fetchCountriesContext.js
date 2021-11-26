import { useEffect, useContext, useReducer } from "react";

import { getData } from "bus/countriesData/getData";
import { initialUrl } from "constants/initialUrl";
import { actionTypes } from "bus/countriesData/actionTypes";
import { FetchCountriesContext } from "bus/countriesData/creatorContext";

export const useFetchCountriesContext = () => {
  return useContext(FetchCountriesContext);
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_COUNTRIES:
      return { ...state, countries: action.payload };
    default:
      return state;
  }
};

export const FetchCountriesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    countries: [],
  });

  useEffect(() => {
    getData(initialUrl, actionTypes.SET_COUNTRIES, dispatch);
  }, [getData]);

  return (
    <FetchCountriesContext.Provider
      value={{
        countries: state.countries,
      }}
    >
      {children}
    </FetchCountriesContext.Provider>
  );
};
