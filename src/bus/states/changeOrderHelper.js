import { ASC, DESC } from "constants/sortingOrders";

export const changeOrderHelper = (currentOrder) => {
  if (currentOrder === ASC) {
    return DESC;
  } else {
    return ASC;
  }
};
