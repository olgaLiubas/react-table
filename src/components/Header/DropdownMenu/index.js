import { useDispatch, useSelector } from "react-redux";

import {
  setOrder,
  setSortingColumn,
  fetchForNextTimes,
} from "bus/country/actions";
import * as uiActions from "bus/ui/actions";
import { getColumnsStatuses } from "bus/ui/selectors";

import styles from "./style.module.scss";

const Dropdown = ({ columnName, fieldInArray }) => {
  const { showFilter, hideColumn, hideMenuColumn, hideModal } = uiActions;

  const dispatch = useDispatch();
  const columns = useSelector(getColumnsStatuses);

  const changeSortingOrder = () => {
    dispatch(setOrder());
    dispatch(setSortingColumn(fieldInArray));
    dispatch(fetchForNextTimes());
  };

  const hideColumnHelper = () => {
    dispatch(hideColumn({ [columnName]: !columns[columnName] }));
  };

  const filterHelper = () => {
    dispatch(hideMenuColumn());
    dispatch(showFilter());
    dispatch(hideModal());
  };

  return (
    <div className={styles.dropdown}>
      <button
        className={styles.dropdownItem}
        onClick={changeSortingOrder}
        type="button"
      >
        Sort by ASC
      </button>

      <button
        className={styles.dropdownItem}
        onClick={changeSortingOrder}
        type="button"
      >
        Sort by DESC
      </button>

      <button
        className={styles.dropdownItem}
        onClick={filterHelper}
        type="button"
      >
        Filter
      </button>

      <button
        className={styles.dropdownItem}
        onClick={hideColumnHelper}
        type="button"
      >
        Hide column
      </button>

      <button className={styles.dropdownItem} type="button">
        Show columns
      </button>
    </div>
  );
};

export default Dropdown;
