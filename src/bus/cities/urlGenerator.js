import { countriesInitialUrl } from "constants/initialUrls";

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
    url = `${countriesInitialUrl}?_sort=${sortingColumn}&_order=${sortingOrder}&_limit=${rowsAmount}&_page=${pageNumber}`;
  }
  if (sortOrFilter === "filter") {
    if (filterOperator === "contains") {
      url = `${countriesInitialUrl}?${filterColumn}_like=${filterValue}&_limit=${rowsAmount}&_page=${pageNumber}`;
    }
    if (filterOperator === "equals") {
      url = `${countriesInitialUrl}?${filterColumn}=${filterValue}&_limit=${rowsAmount}&_page=${pageNumber}`;
    }
    if (filterOperator === "is not") {
      url = `${countriesInitialUrl}?${filterColumn}_ne=${filterValue}&_limit=${rowsAmount}&_page=${pageNumber}`;
    }
  }
  return url;
}
