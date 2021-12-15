import { statesInitialUrl } from "constants/initialUrls";

export function urlGenerator(props) {
  const {
    sortOrFilter,
    sortingColumn,
    sortingOrder,
    filterColumn,
    filterOperator,
    filterValue,
    rowsAmount,
    pageNumber,
  } = props;
  let url;
  if (sortOrFilter === "sort") {
    url = `${statesInitialUrl}?_sort=${sortingColumn}&_order=${sortingOrder}&_limit=${rowsAmount}&_page=${pageNumber}`;
  }
  if (sortOrFilter === "filter") {
    if (filterOperator === "contains") {
      url = `${statesInitialUrl}?${filterColumn}_like=${filterValue}&_limit=${rowsAmount}&_page=${pageNumber}`;
    }
    if (filterOperator === "equals") {
      url = `${statesInitialUrl}?${filterColumn}=${filterValue}&_limit=${rowsAmount}&_page=${pageNumber}`;
    }
    if (filterOperator === "is not") {
      url = `${statesInitialUrl}?${filterColumn}_ne=${filterValue}&_limit=${rowsAmount}&_page=${pageNumber}`;
    }
  }
  return url;
}
