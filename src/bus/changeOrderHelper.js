import { asc, desc } from "constants/sortingOrders";

export const changeOrderHelper = (currentOrder) => {
  if (currentOrder === asc) {
    return desc;
  } else {
    return asc;
  }
};
