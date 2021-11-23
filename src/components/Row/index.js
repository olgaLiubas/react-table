import { useState } from "react";
import PropTypes from "prop-types";

import Modal from "components/Row/Modal";
import RowCell from "components/Row/RowCell";
import cellsNamesConfig from "constants/cellsNamesConfig";

import styles from "./style.module.scss";

const Row = ({ country }) => {
  const [isModal, setIsModal] = useState(false);

  const onShowModalHelper = () => {
    setIsModal(true);
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

        {isModal && <Modal setIsModal={setIsModal} />}
      </div>
    </>
  );
};

Row.propTypes = {
  country: PropTypes.object,
};

export default Row;
