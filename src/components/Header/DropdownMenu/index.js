import { useDispatch, useSelector } from "react-redux";

import {
  showFilter,
  hideMenuColumn,
  hideModal,
  setOrder,
  setSortingColumn,
} from "bus/ui/actions";

import styles from "./style.module.scss";

const Dropdown = ({ columnName, fieldInArray, selectors, actions }) => {
  const dispatch = useDispatch();
  const columns = useSelector(selectors.getColumnsStatuses);

  const changeSortingOrder = () => {
    dispatch(setOrder());
    dispatch(setSortingColumn(fieldInArray));
    dispatch(actions.fetchForNextTimes());
  };

  const hideColumnHelper = () => {
    dispatch(actions.hideColumn({ [columnName]: !columns[columnName] }));
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
