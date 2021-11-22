import PropTypes from "prop-types";

import styles from "./style.module.scss";

const Filter = ({ showFilter }) => (
  <div className={styles.filter}>
    <p className={styles.filterCross} onClick={() => showFilter(false)}>
      ╳
    </p>
    <div className={styles.filterItem}>
      <p>Columns</p>
      <select>
        <option>Name</option>
        <option>Capital</option>
        <option>Phone code</option>
        <option>Currency</option>
        <option>ISO</option>
      </select>
    </div>
    <div className={styles.filterItem}>
      <p>Operators</p>
      <select>
        <option>contains</option>
        <option>equals</option>
        <option>starts with</option>
        <option>ends with</option>
        <option>is empty</option>
        <option>isn't empty</option>
      </select>
    </div>
    <div className={styles.filterItem}>
      <p>Value</p>
      <input placeholder="Filter value" />
    </div>
  </div>
);

Filter.propTypes = {
  showFilter: PropTypes.func,
};

export default Filter;
