export const getData = (state) => state.countriesState.countries;

export const getColumnsStatuses = (state) => state.countriesState.columns;

export const getFetchingStatuses = (state) =>
  state.countriesState.fetchingCountries;

export const getUpdatingStatuses = (state) =>
  state.countriesState.updatingCountries;
