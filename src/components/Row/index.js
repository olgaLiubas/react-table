import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import Modal from "components/Row/Modal";
import RowCell from "components/Row/RowCell";
import { cellsNamesConfig } from "constants/cellsNamesConfig";
import { showFilter, showModal, showMenuColumn } from "bus/ui/actions";

import styles from "./style.module.scss";

const Row = ({ country }) => {
  const dispatch = useDispatch();
  const ui = useSelector((state) => state.ui);

  const onShowModalHelper = () => {
    dispatch(showMenuColumn(null));
    dispatch(showFilter(false));
    dispatch(showModal(true));
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
            ui[cell.nameInUiState] && (
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

        {ui.isModal && <Modal />}
      </div>
    </>
  );
};

Row.propTypes = {
  country: PropTypes.object,
};

export default Row;
