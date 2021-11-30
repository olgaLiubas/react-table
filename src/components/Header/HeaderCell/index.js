import cn from "classnames";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import { setStatus, setFilter } from "redux/actions";
import Dropdown from "components/Header/DropdownMenu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import styles from "./style.module.scss";

const HeaderCell = ({ id, text, field, extraClass }) => {
  const dispatch = useDispatch();

  const UIState = useSelector((state) => state.UIState);
  const sortingOrder = useSelector(
    (state) => state.countriesState.sortingOrder
  );

  const changeSortingOrder = () => {
    sortingOrder === "asc"
      ? dispatch(setFilter({ sortingOrder: "desc" }))
      : dispatch(setFilter({ sortingOrder: "asc" }));
  };

  const showMenuHelper = (columnName) => () => {
    if (columnName === UIState.isMenuColumn) {
      dispatch(setStatus({ isMenuColumn: null }));
    } else {
      dispatch(setStatus({ isMenuColumn: columnName }));
      dispatch(setStatus({ isFilter: false }));
      dispatch(setStatus({ isModal: false }));
    }
  };
  return (
    <>
      <p className={styles.separator}>|</p>
      <div className={cn(styles.headerCell, extraClass)}>
        <p className={styles.cellName}>{text}</p>
        <div className={styles.cellButtons}>
          <button onClick={changeSortingOrder}>
            {sortingOrder === "asc" ? (
              <ArrowUpwardIcon />
            ) : (
              <ArrowDownwardIcon />
            )}
          </button>

          <button onClick={showMenuHelper(id)}>
            <MoreVertIcon />
          </button>

          {id === UIState.isMenuColumn && <Dropdown />}
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
