import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import Modal from "components/Row/Modal";
import RowCell from "components/Row/RowCell";
import { setDropdownsStatuses } from "redux/actions";
import { cellsNamesConfig } from "constants/cellsNamesConfig";

import styles from "./style.module.scss";

const Row = ({ country }) => {
  const dispatch = useDispatch();
  const dropdownsStatuses = useSelector(
    (state) => state.dropdownsState.dropdownsStatuses
  );

  const onShowModalHelper = () => {
    dispatch(
      setDropdownsStatuses({
        isFilter: false,
        isModal: true,
        isMenuColumn: null,
      })
    );
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

        {dropdownsStatuses.isModal && <Modal />}
      </div>
    </>
  );
};

Row.propTypes = {
  country: PropTypes.object,
};

export default Row;
