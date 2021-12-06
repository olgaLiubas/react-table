import { useDispatch, useSelector } from "react-redux";

import {
  setFilterColumn,
  setFilterOperator,
  setFilterValue,
  fetchForNextTimes,
  setSortOrFilter,
} from "bus/country/actions";
import { showFilter } from "bus/ui/actions";

import styles from "./style.module.scss";

const Filter = () => {
  const dispatch = useDispatch();

  const { filterValue } = useSelector(
    (state) => state.countriesState.functionality
  );

  const onChangeFilterColumn = (e) => dispatch(setFilterColumn(e.target.value));

  const onChangeFilterOperator = (e) =>
    dispatch(setFilterOperator(e.target.value));

  const onInputFilterValue = (e) => {
    dispatch(setSortOrFilter("filter"));
    dispatch(setFilterValue(e.target.value));
    dispatch(fetchForNextTimes());
  };

  const setIsFilterHelper = () => {
    dispatch(showFilter(false));
    dispatch(setFilterColumn("Name"));
    dispatch(setFilterOperator("contains"));
    dispatch(setFilterValue(""));
    dispatch(setSortOrFilter("sort"));
    dispatch(fetchForNextTimes());
  };

  return (
    <div className={styles.filter}>
      <p className={styles.filterCross} onClick={setIsFilterHelper}>
        ╳
      </p>
      <div className={styles.filterItem}>
        <p>Columns</p>
        <select defaultValue="name" onChange={(e) => onChangeFilterColumn(e)}>
          <option value="name">Name</option>
          <option value="capital">Capital</option>
          <option value="phone_code">Phone code</option>
          <option value="currency">Currency</option>
          <option value="iso3">ISO</option>
        </select>
      </div>
      <div className={styles.filterItem}>
        <p>Operators</p>
        <select onChange={(e) => onChangeFilterOperator(e)}>
          <option value="contains">contains</option>
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
