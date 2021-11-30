import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import Modal from "components/Row/Modal";
import { setStatus } from "redux/actions";
import RowCell from "components/Row/RowCell";
import { cellsNamesConfig } from "constants/cellsNamesConfig";

import styles from "./style.module.scss";

const Row = ({ country }) => {
  const dispatch = useDispatch();
  const UIState = useSelector((state) => state.UIState);

  const onShowModalHelper = () => {
    dispatch(setStatus({ isMenuColumn: null }));
    dispatch(setStatus({ isFilter: false }));
    dispatch(setStatus({ isModal: true }));
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

        <p className={styles.editButton} onClick={onShowModalHelper}>
          🖊️
        </p>

        {UIState.isModal && <Modal />}
      </div>
    </>
  );
};

Row.propTypes = {
  country: PropTypes.object,
};

export default Row;
