import { useDispatch, useSelector } from "react-redux";

import { getFunctionalityData } from "bus/ui/selectors";
import { setPageNumber, setRowsAmount } from "bus/ui/actions";

import styles from "./style.module.scss";

const Footer = ({ actions, amountOfPlaces }) => {
  const dispatch = useDispatch();
  const { rowsAmount, pageNumber } = useSelector(getFunctionalityData);

  const maxAmount = Math.ceil(amountOfPlaces / rowsAmount);

  const goBackHelper = () => {
    if (pageNumber > 1) {
      dispatch(setPageNumber(pageNumber - 1));
      dispatch(actions.fetchForNextTimes());
    }
  };
  const goForwardHelper = () => {
    if (pageNumber < maxAmount) {
      dispatch(setPageNumber(pageNumber + 1));
      dispatch(actions.fetchForNextTimes());
    }
  };
  const changeAmountHelper = (e) => {
    dispatch(setRowsAmount(Number(e.target.value)));
    dispatch(setPageNumber(1));
    dispatch(actions.fetchForNextTimes());
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
