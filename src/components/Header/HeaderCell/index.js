import cn from "classnames";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import { setOrder } from "bus/country/actions";
import Dropdown from "components/Header/DropdownMenu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { showFilter, showModal, showMenuColumn } from "bus/ui/actions";

import styles from "./style.module.scss";

const HeaderCell = ({ id, text, field, extraClass }) => {
  const dispatch = useDispatch();

  const ui = useSelector((state) => state.ui);
  const sortingOrder = useSelector(
    (state) => state.countriesState.sortingOrder
  );

  const changeSortingOrder = () => dispatch(setOrder());

  const showMenuHelper = (columnName) => () => {
    if (columnName === ui.isMenuColumn) {
      dispatch(showMenuColumn(null));
    } else {
      dispatch(showMenuColumn(columnName));
      dispatch(showFilter(false));
      dispatch(showModal(false));
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

          {id === ui.isMenuColumn && <Dropdown />}
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
