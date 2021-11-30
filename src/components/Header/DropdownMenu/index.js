import { useDispatch, useSelector } from "react-redux";

import { setOrder, showFilter, showModal, showMenuColumn } from "redux/actions";

import styles from "./style.module.scss";

const Dropdown = () => {
  const dispatch = useDispatch();
  const ui = useSelector((state) => state.ui);

  const changeSortingOrder = () => dispatch(setOrder());

  const consoleText = (action) => () => {
    console.log(`Button "${action}" from column "${ui.isMenuColumn}"`);
    if (action === "Filter") {
      dispatch(showMenuColumn(null));
      dispatch(showFilter(true));
      dispatch(showModal(false));
    }
  };

  return (
    <div className={styles.dropdown}>
      <button className={styles.dropdownItem} onClick={changeSortingOrder}>
        Sort by ASC
      </button>

      <button className={styles.dropdownItem} onClick={changeSortingOrder}>
        Sort by DESC
      </button>

      <button className={styles.dropdownItem} onClick={consoleText("Filter")}>
        Filter
      </button>

      <button
        className={styles.dropdownItem}
        onClick={consoleText("Hide column")}
      >
        Hide column
      </button>

      <button
        className={styles.dropdownItem}
        onClick={consoleText("Show columns")}
      >
        Show columns
      </button>
    </div>
  );
};

export default Dropdown;
