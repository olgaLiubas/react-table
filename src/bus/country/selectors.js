export const getCountries = (state) => state.countriesState.countries;

export const getFetchingCountriesStatuses = (state) =>
  state.countriesState.fetchingCountries;

export const getUpdatingCountriesStatuses = (state) =>
  state.countriesState.updatingCountries;

export const getFunctionalityData = (state) =>
  state.countriesState.functionality;

export const getEditCountry = (state) => state.countriesState.editCountry;
