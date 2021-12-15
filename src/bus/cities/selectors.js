export const getData = (state) => state.citiesState.states;

export const getColumnsStatuses = (state) => state.citiesState.columns;

export const getFetchingStatuses = (state) => state.citiesState.fetchingStates;

export const getUpdatingStatuses = (state) =>
  state.citiesState.updatingCountries;
