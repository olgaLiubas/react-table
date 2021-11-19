import PropTypes from "prop-types";

import RowCell from "components/Row/RowCell";

import styles from "./style.module.scss";

const Row = ({ country, cellsNamesConfig }) => (
  <div className={styles.row}>
    <input type="checkbox" name="row-header" className={styles.rowCheckbox} />
    {cellsNamesConfig.map((cell) => (
      <RowCell
        key={cell.id}
        extraClass={styles[cell.id]}
        text={country[cell.fieldInCountries]}
      />
    ))}
  </div>
);

Row.propTypes = {
  country: PropTypes.object,
  cellsNamesConfig: PropTypes.array,
};

export default Row;
