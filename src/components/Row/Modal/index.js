import PropTypes from "prop-types";

import styles from "./style.module.scss";

const Modal = ({ setIsModal }) => {
  const onShowModalHelper = () => {
    setIsModal(false);
  };
  return (
    <div className={styles.modalActive}>
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
        <button onClick={onShowModalHelper}>CANCEL</button>
        <button>CHANGE</button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  setIsModal: PropTypes.func,
};

export default Modal;
