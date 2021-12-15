export const getData = (state) => state.statesState.states;

export const getColumnsStatuses = (state) => state.statesState.columns;

export const getFetchingStatuses = (state) => state.statesState.fetchingStates;

export const getUpdatingStatuses = (state) =>
  state.statesState.updatingCountries;
