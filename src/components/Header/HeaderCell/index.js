import cn from "classnames";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import {
  showMenuColumn,
  hideMenuColumn,
  hideFilter,
  hideModal,
  changeOrder,
  setSortingColumn,
} from "bus/ui/actions";
import { getUiState } from "bus/ui/selectors";
import Dropdown from "components/Header/DropdownMenu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { getFunctionalityData } from "bus/ui/selectors";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import styles from "./style.module.scss";

const HeaderCell = ({
  id,
  text,
  extraClass,
  columnName,
  fieldInArray,
  selectors,
  actions,
}) => {
  const dispatch = useDispatch();

  const ui = useSelector(getUiState);
  const { sortingOrder } = useSelector(getFunctionalityData);

  const changeSortingOrder = () => {
    dispatch(changeOrder());
    dispatch(setSortingColumn(fieldInArray));
    dispatch(actions.fetchForNextTimes());
  };

  const showMenuHelper = (columnName) => () => {
    if (columnName === ui.isMenuColumn) {
      dispatch(hideMenuColumn());
    } else {
      dispatch(showMenuColumn(columnName));
      dispatch(hideFilter(false));
      dispatch(hideModal(false));
    }
  };
  return (
    <>
      <p className={styles.separator}>|</p>
      <div className={cn(styles.headerCell, extraClass)}>
        <p className={styles.cellName}>{text}</p>
        <div className={styles.cellButtons}>
          <button className={styles.button} onClick={changeSortingOrder}>
            {sortingOrder === "asc" ? (
              <ArrowUpwardIcon />
            ) : (
              <ArrowDownwardIcon />
            )}
          </button>

          <button className={styles.button} onClick={showMenuHelper(id)}>
            <MoreVertIcon />
          </button>

          {id === ui.isMenuColumn && (
            <Dropdown
              columnName={columnName}
              fieldInArray={fieldInArray}
              selectors={selectors}
              actions={actions}
            />
          )}
        </div>
      </div>
    </>
  );
};

HeaderCell.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  text: PropTypes.string,
  field: PropTypes.string,
  extraClass: PropTypes.string,
};

export default HeaderCell;
