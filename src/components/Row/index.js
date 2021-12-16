import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import RowCell from "components/Row/RowCell";
import { setEditCountry } from "bus/ui/actions";
import { showModal, hideMenuColumn, hideFilter } from "bus/ui/actions";

import styles from "./style.module.scss";

const Row = ({ item, cellsNamesConfig, selectors }) => {
  const dispatch = useDispatch();
  const columns = useSelector(selectors.getColumnsStatuses);

  const onShowModalHelper = () => {
    dispatch(hideMenuColumn());
    dispatch(hideFilter());
    dispatch(showModal(true));
    dispatch(setEditCountry(item));
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
                text={item[cell.fieldInArray]}
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
