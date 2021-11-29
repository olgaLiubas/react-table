import { INCREMENT, DECREMENT } from "redux/types";

export const incrementCounter = () => ({
  type: INCREMENT,
});

export const decrementCounter = () => ({
  type: DECREMENT,
});
