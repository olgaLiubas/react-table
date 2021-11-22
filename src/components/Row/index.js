import PropTypes from "prop-types";

import RowCell from "components/Row/RowCell";

import styles from "./style.module.scss";

const Row = ({ onEditClick, country, cellsNamesConfig }) => {
  const showEditForm = (bool) => {
    onEditClick(bool);
  };

  return (
    <>
      <div className={styles.row}>
        <input
          type="checkbox"
          name="row-header"
          className={styles.rowCheckbox}
        />
        {cellsNamesConfig.map((cell) => (
          <RowCell
            key={cell.id}
            extraClass={styles[cell.id]}
            text={country[cell.fieldInCountries]}
          />
        ))}

        <p className={styles.editButton} onClick={() => showEditForm(true)}>
          🖊️
        </p>
      </div>
    </>
  );
};

Row.propTypes = {
  country: PropTypes.object,
  cellsNamesConfig: PropTypes.array,
};

export default Row;
