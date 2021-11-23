import PropTypes from "prop-types";

import styles from "./style.module.scss";

const Dropdown = ({ activeColumn, setActiveColumn, setIsFilter }) => {
  const consoleText = (action) => () => {
    console.log(`Button "${action}" from column "${activeColumn}"`);
    if (action === "Filter") {
      setIsFilter(true);
      setActiveColumn(null);
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

Dropdown.propTypes = {
  activeColumn: PropTypes.string,
  setIsFilter: PropTypes.func,
  setActiveColumn: PropTypes.func,
};

export default Dropdown;
