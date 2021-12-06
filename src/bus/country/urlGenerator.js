import { initialUrl } from "constants/initialUrl";

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
    url = `${initialUrl}?_sort=${sortingColumn}&_order=${sortingOrder}&_limit=${rowsAmount}&_page=${pageNumber}`;
  }
  if (sortOrFilter === "filter") {
    if (filterOperator === "contains") {
      url = `${initialUrl}?${filterColumn}_like=${filterValue}`;
    }
    if (filterOperator === "equals") {
      url = `${initialUrl}?${filterColumn}=${filterValue}&_limit=${rowsAmount}&_page=${pageNumber}`;
    }
  }
  return url;
}
