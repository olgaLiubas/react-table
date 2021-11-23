import { useState } from "react";
import PropTypes from "prop-types";

import cellsNamesConfig from "constants/cellsNamesConfig";
import RowCell from "components/Row/RowCell";
import Modal from "components/Row/Modal";

import styles from "./style.module.scss";

const Row = ({ country }) => {
  const [modalId, setModalId] = useState(null);
  const [isModal, setIsModal] = useState(false);

  const showModalHelper = (e) => {
    const id = Array.from(e.target.parentElement.children).find((el) =>
      el.className.includes("id")
    );
    setModalId(Number(id.innerText));
    return setIsModal(true);
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

        <p className={styles.editButton} onClick={(e) => showModalHelper(e)}>
          🖊️
        </p>

        {country.id === modalId && isModal && (
          <Modal showModal={(bool) => setIsModal(bool)} />
        )}
      </div>
    </>
  );
};

Row.propTypes = {
  isModal: PropTypes.bool,
  showModal: PropTypes.func,
  country: PropTypes.object,
  cellsNamesConfig: PropTypes.array,
};

export default Row;
