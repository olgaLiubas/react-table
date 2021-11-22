import cn from "classnames";
import PropTypes from "prop-types";

import styles from "./style.module.scss";

const Modal = ({ showModal, drillStateFromModalForm }) => {
  const hideModalForm = (bool) => {
    drillStateFromModalForm(bool);
  };
  return (
    <div className={cn(styles.modal, { [styles.modalActive]: showModal })}>
      <div className={styles.modalProp}>
        <p>ID № </p>
        <p></p>
      </div>
      <div className={styles.modalProp}>
        <p>Name:</p>
        <input />
      </div>
      <div className={styles.modalProp}>
        <p>Capital:</p>
        <input />
      </div>
      <div className={styles.modalProp}>
        <p>Phone code:</p>
        <input />
      </div>
      <div className={styles.modalProp}>
        <p>Currency:</p>
        <input />
      </div>
      <div className={styles.modalProp}>
        <p>ISO:</p>
        <input />
      </div>
      <div className={styles.modalButtons}>
        <button onClick={() => hideModalForm(false)}>CANCEL</button>
        <button>CHANGE</button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  showModal: PropTypes.bool,
};

export default Modal;
