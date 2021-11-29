import { setDropdownsStatuses } from "redux/actions";
import { useDispatch, useSelector } from "react-redux";

import styles from "./style.module.scss";

const Dropdown = () => {
  const dispatch = useDispatch();
  const dropdownsStatuses = useSelector(
    (state) => state.dropdownsState.dropdownsStatuses
  );

  const consoleText = (action) => () => {
    console.log(
      `Button "${action}" from column "${dropdownsStatuses.isMenuColumn}"`
    );
    if (action === "Filter") {
      dispatch(
        setDropdownsStatuses({
          isFilter: true,
          isModal: false,
          isMenuColumn: null,
        })
      );
    }
  };

  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdownItem} onClick={consoleText("Sort by ASC")}>
        Sort by ASC
      </div>

      <div
        className={styles.dropdownItem}
        onClick={consoleText("Sort by DESC")}
      >
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
