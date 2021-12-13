import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import RowCell from "components/Row/RowCell";
import { setEditCountry } from "bus/country/actions";
import { getColumnsStatuses } from "bus/ui/selectors";
import { cellsNamesConfig } from "constants/cellsNamesConfig";
import { showModal, hideMenuColumn, hideFilter } from "bus/ui/actions";

import styles from "./style.module.scss";

const Row = ({ country }) => {
  const dispatch = useDispatch();
  const columns = useSelector(getColumnsStatuses);

  const onShowModalHelper = () => {
    dispatch(hideMenuColumn());
    dispatch(hideFilter());
    dispatch(showModal(true));
    dispatch(setEditCountry(country));
  };

  return (
    <>
      <div className={styles.row}>
        <input
          type="checkbox"
          name="row-header"
          className={styles.rowCheckbox}
        />

        {cellsNamesConfig.map(
          (cell) =>
            columns[cell.nameInUiState] && (
              <RowCell
                key={cell.id}
                extraClass={styles[cell.id]}
                text={country[cell.fieldInCountries]}
              />
            )
        )}

        <p className={styles.editButton} onClick={onShowModalHelper}>
          🖊️
        </p>
      </div>
    </>
  );
};

Row.propTypes = {
  country: PropTypes.object,
};

export default Row;
