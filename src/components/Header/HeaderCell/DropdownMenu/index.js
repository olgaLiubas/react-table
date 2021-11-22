import cn from "classnames";
import PropTypes from "prop-types";

import styles from "./style.module.scss";

const Dropdown = ({ activeColumn, showFilter }) => {
  const consoleText = (e) => {
    console.log(`Button "${e.target.innerText}" from column "${activeColumn}"`);
    if (e.target.innerText === "Filter") {
      showFilter(true);
    }
    e.stopPropagation();
  };
  return (
    <div className={styles.dropdown}>
      <div
        className={cn(styles.dropdownItem, styles.sortAscBut)}
        onClick={(e) => consoleText(e)}
      >
        Sort by ASC
      </div>
      <div
        className={cn(styles.dropdownItem, styles.sortDescBut)}
        onClick={(e) => consoleText(e)}
      >
        Sort by DESC
      </div>
      <div
        className={cn(styles.dropdownItem, styles.filterBut)}
        onClick={(e) => consoleText(e)}
      >
        Filter
      </div>
      <div
        className={cn(styles.dropdownItem, styles.hideColumn)}
        onClick={(e) => consoleText(e)}
      >
        Hide column
      </div>
      <div
        className={cn(styles.dropdownItem, styles.showColumns)}
        onClick={(e) => consoleText(e)}
      >
        Show columns
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  activeColumn: PropTypes.string,
  showFilter: PropTypes.func,
};

export default Dropdown;
