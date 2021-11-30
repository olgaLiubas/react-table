import { setStatus, setFilter } from "redux/actions";
import { useDispatch, useSelector } from "react-redux";

import styles from "./style.module.scss";

const Dropdown = () => {
  const dispatch = useDispatch();
  const UIState = useSelector((state) => state.UIState);

  const changeSortingOrderToASC = () => {
    dispatch(setFilter({ sortingOrder: "asc" }));
  };

  const changeSortingOrderToDESC = () => {
    dispatch(setFilter({ sortingOrder: "desc" }));
  };

  const consoleText = (action) => () => {
    console.log(`Button "${action}" from column "${UIState.isMenuColumn}"`);
    if (action === "Filter") {
      dispatch(setStatus({ isMenuColumn: null }));
      dispatch(setStatus({ isFilter: true }));
      dispatch(setStatus({ isModal: false }));
    }
  };

  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdownItem} onClick={changeSortingOrderToASC}>
        Sort by ASC
      </div>

      <div className={styles.dropdownItem} onClick={changeSortingOrderToDESC}>
        Sort by DESC
      </div>

      <div className={styles.dropdownItem} onClick={consoleText("Filter")}>
        Filter
      </div>

      <div className={styles.dropdownItem} onClick={consoleText("Hide column")}>
        Hide column
      </div>

      <div
        className={styles.dropdownItem}
        onClick={consoleText("Show columns")}
      >
        Show columns
      </div>
    </div>
  );
};

export default Dropdown;
