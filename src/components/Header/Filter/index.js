import { useDispatch } from "react-redux";

import { setStatus, setFilter } from "redux/actions";

import styles from "./style.module.scss";

const Filter = () => {
  const dispatch = useDispatch();

  const onChangeFilterColumn = (e) => {
    dispatch(setFilter({ filterColumn: e.target.value }));
  };

  const onChangeFilterOperator = (e) => {
    dispatch(setFilter({ filterOperator: e.target.value }));
  };

  const onInputFilterValue = (e) => {
    dispatch(setFilter({ filterValue: e.target.value }));
  };

  const setIsFilterHelper = () => {
    dispatch(setStatus({ isFilter: false }));
    dispatch(setFilter({ filterColumn: "Name" }));
    dispatch(setFilter({ filterOperator: "contains" }));
    dispatch(setFilter({ filterValue: "" }));
  };

  return (
    <div className={styles.filter}>
      <p className={styles.filterCross} onClick={setIsFilterHelper}>
        ╳
      </p>
      <div className={styles.filterItem}>
        <p>Columns</p>
        <select onChange={(e) => onChangeFilterColumn(e)}>
          <option>Name</option>
          <option>Capital</option>
          <option>Phone code</option>
          <option>Currency</option>
          <option>ISO</option>
        </select>
      </div>
      <div className={styles.filterItem}>
        <p>Operators</p>
        <select onChange={(e) => onChangeFilterOperator(e)}>
          <option>contains</option>
          <option>equals</option>
          <option>starts with</option>
          <option>ends with</option>
          <option>is empty</option>
          <option>isn't empty</option>
        </select>
      </div>
      <div className={styles.filterItem}>
        <p>Value</p>
        <input
          placeholder="Filter value"
          onInput={(e) => onInputFilterValue(e)}
        />
      </div>
    </div>
  );
};

export default Filter;
