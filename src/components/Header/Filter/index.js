import { useDispatch, useSelector } from "react-redux";

import {
  hideFilter,
  setSortOrFilter,
  setFilterColumn,
  setFilterOperator,
  setFilterValue,
} from "bus/ui/actions";
import { getFunctionalityData } from "bus/ui/selectors";

import styles from "./style.module.scss";

const Filter = ({ actions, cellsNamesConfig }) => {
  const dispatch = useDispatch();
  const cells = cellsNamesConfig.filter((cell) => cell.id !== "id");
  const { filterValue } = useSelector(getFunctionalityData);

  const onChangeFilterColumn = (e) => dispatch(setFilterColumn(e.target.value));

  const onChangeFilterOperator = (e) =>
    dispatch(setFilterOperator(e.target.value));

  const onInputFilterValue = (e) => {
    dispatch(setSortOrFilter("filter"));
    dispatch(setFilterValue(e.target.value));
    dispatch(actions.fetchForNextTimes());
  };

  const setIsFilterHelper = () => {
    dispatch(hideFilter());
    dispatch(setFilterColumn("Name"));
    dispatch(setFilterOperator("contains"));
    dispatch(setFilterValue(""));
    dispatch(setSortOrFilter("sort"));
    dispatch(actions.fetchForNextTimes());
  };

  return (
    <div className={styles.filter}>
      <p className={styles.filterCross} onClick={setIsFilterHelper}>
        ╳
      </p>
      <div className={styles.filterItem}>
        <p>Columns</p>
        <select defaultValue="name" onChange={(e) => onChangeFilterColumn(e)}>
          {cells.map((cell) => (
            <option key={cell.id} value={cell.fieldInArray}>
              {cell.nameOfHeaderColumn}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.filterItem}>
        <p>Operators</p>
        <select onChange={(e) => onChangeFilterOperator(e)}>
          <option value="contains">contains</option>
          <option value="equals">equals</option>
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
