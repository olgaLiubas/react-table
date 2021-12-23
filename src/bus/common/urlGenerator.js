export function urlGenerator(...props) {
  const initialUrl = props[1];
  const page = props[2];
  const {
    sortOrFilter,
    sortingColumn,
    sortingOrder,
    filterColumn,
    filterOperator,
    filterValue,
    rowsAmount,
    pageNumber,
  } = props[0];
  let url;
  if (sortOrFilter === "sort") {
    // url = `${initialUrl}/${page}?_sort=${sortingColumn}&_order=${sortingOrder}&_limit=${rowsAmount}&_page=${pageNumber}`;
    url = `${page}?_sort=${sortingColumn}&_order=${sortingOrder}&_limit=${rowsAmount}&_page=${pageNumber}`;
  }
  if (sortOrFilter === "filter") {
    if (filterOperator === "contains") {
      url = `${initialUrl}/${page}?${filterColumn}_like=${filterValue}`;
    }
    if (filterOperator === "equals") {
      url = `${initialUrl}/${page}?${filterColumn}=${filterValue}&_limit=${rowsAmount}&_page=${pageNumber}`;
    }
  }
  console.log(url);
  return url;
}
