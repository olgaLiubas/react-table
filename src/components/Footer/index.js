import { useDispatch, useSelector } from "react-redux";

import { fetchForNextTimes } from "bus/country/actions";
import { setPageNumber, setRowsAmount } from "bus/country/actions";
import { getFunctionalityData } from "bus/country/selectors";

import styles from "./style.module.scss";

const Footer = () => {
  const dispatch = useDispatch();
  const { rowsAmount, pageNumber } = useSelector(getFunctionalityData);

  const maxAmount = Math.ceil(250 / rowsAmount);

  const goBackHelper = () => {
    if (pageNumber > 1) {
      dispatch(setPageNumber(pageNumber - 1));
      dispatch(fetchForNextTimes());
    }
  };
  const goForwardHelper = () => {
    if (pageNumber < maxAmount) {
      dispatch(setPageNumber(pageNumber + 1));
      dispatch(fetchForNextTimes());
    }
  };
  const changeAmountHelper = (e) => {
    dispatch(setRowsAmount(Number(e.target.value)));

    dispatch(fetchForNextTimes());
  };

  return (
    <div className={styles.footer}>
      <div className={styles.wrapperSelector}>
        <p>Amount of rows:</p>
        <select onChange={(event) => changeAmountHelper(event)}>
          <option>20</option>
          <option>50</option>
          <option>100</option>
        </select>
      </div>
      <p>
        Page: {pageNumber} of {maxAmount}
      </p>
      <div className={styles.wrapperButtons}>
        <p className={styles.backButton} onClick={goBackHelper}>
          ◀
        </p>
        <p className={styles.forwardButton} onClick={goForwardHelper}>
          ▶
        </p>
      </div>
    </div>
  );
};

export default Footer;
