export const getStates = (state) => state.statesState.states;

export const getFetchingStatesStatuses = (state) =>
  state.statesState.fetchingStates;

export const getUpdatingStatesStatuses = (state) =>
  state.statesState.updatingStates;

export const getFunctionalityData = (state) => state.statesState.functionality;

export const getEditState = (state) => state.statesState.editState;
