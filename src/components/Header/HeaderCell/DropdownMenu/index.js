import cn from "classnames";
import PropTypes from "prop-types";

import styles from "./style.module.scss";

const Dropdown = ({ field, showMenu }) => (
  <div className={cn(styles.dropdown, { [styles.dropdownActive]: showMenu })}>
    <div className={cn(styles.dropdownItem, styles.sortAscBut)}>
      Sort by ASC
    </div>
    <div className={cn(styles.dropdownItem, styles.sortDescBut)}>
      Sort by DESC
    </div>
    <div className={cn(styles.dropdownItem, styles.filterBut)}>Filter</div>
    <div className={cn(styles.dropdownItem, styles.hideColumn)}>
      Hide column
    </div>
    <div className={cn(styles.dropdownItem, styles.showColumns)}>
      Show columns
    </div>
  </div>
);

Dropdown.propTypes = {
  field: PropTypes.string,
  showMenu: PropTypes.bool,
};

export default Dropdown;
