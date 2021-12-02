import { useDispatch, useSelector } from "react-redux";

import { setOrder } from "bus/country/actions";
import { showFilter, showModal, showMenuColumn } from "bus/ui/actions";

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
      <button
        className={styles.dropdownItem}
        onClick={changeSortingOrder}
        type="button"
      >
        Sort by ASC
      </button>

      <button
        className={styles.dropdownItem}
        onClick={changeSortingOrder}
        type="button"
      >
        Sort by DESC
      </button>

      <button
        className={styles.dropdownItem}
        onClick={consoleText("Filter")}
        type="button"
      >
        Filter
      </button>

      <button
        className={styles.dropdownItem}
        onClick={consoleText("Hide column")}
        type="button"
      >
        Hide column
      </button>

      <button
        className={styles.dropdownItem}
        onClick={consoleText("Show columns")}
        type="button"
      >
        Show columns
      </button>
    </div>
  );
};

export default Dropdown;
