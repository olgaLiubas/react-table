import { useDispatch, useSelector } from "react-redux";

import {
  setFilterColumn,
  setFilterOperator,
  setFilterValue,
} from "bus/country/actions";
import { showFilter } from "bus/ui/actions";

import styles from "./style.module.scss";

const Filter = () => {
  const dispatch = useDispatch();

  const filterValue = useSelector((state) => state.countriesState.filterValue);

  const onChangeFilterColumn = (e) => dispatch(setFilterColumn(e.target.value));

  const onChangeFilterOperator = (e) =>
    dispatch(setFilterOperator(e.target.value));

  const onInputFilterValue = (e) => dispatch(setFilterValue(e.target.value));

  const setIsFilterHelper = () => {
    dispatch(showFilter(false));
    dispatch(setFilterColumn("Name"));
    dispatch(setFilterOperator("contains"));
    dispatch(setFilterValue(""));
  };

  return (
    <div className={styles.filter}>
      <p className={styles.filterCross} onClick={setIsFilterHelper}>
        ╳
      </p>
      <div className={styles.filterItem}>
        <p>Columns</p>
        <select onChange={(e) => onChangeFilterColumn(e)}>
          <option selected value="Name">
            Name
          </option>
          <option value="Capital">Capital</option>
          <option value="Phone code">Phone code</option>
          <option value="Currency">Currency</option>
          <option value="ISO">ISO</option>
        </select>
      </div>
      <div className={styles.filterItem}>
        <p>Operators</p>
        <select onChange={(e) => onChangeFilterOperator(e)}>
          <option selected value="contains">
            contains
          </option>
          <option value="equals">equals</option>
          <option value="starts with">starts with</option>
          <option value="ends with">ends with</option>
          <option value="is empty">is empty</option>
          <option value="isn't empty">isn't empty</option>
        </select>
      </div>
      <div className={styles.filterItem}>
        <p>Value</p>
        <input
          placeholder="Filter value"
          value={filterValue}
          onChange={(e) => onInputFilterValue(e)}
        />
      </div>
    </div>
  );
};

export default Filter;
