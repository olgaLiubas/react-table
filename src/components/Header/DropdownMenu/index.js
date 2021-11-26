import { useDropdownsContext } from "bus/UI/dropdownsContext";

import styles from "./style.module.scss";

const Dropdown = () => {
  const { dropdownsStatuses, setDropdownsStatuses } = useDropdownsContext();

  const consoleText = (action) => () => {
    console.log(
      `Button "${action}" from column "${dropdownsStatuses.isMenuColumn}"`
    );
    if (action === "Filter") {
      setDropdownsStatuses({
        isFilter: true,
        isModal: false,
        isMenuColumn: null,
      });
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
