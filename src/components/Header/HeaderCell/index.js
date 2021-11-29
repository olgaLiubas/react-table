import cn from "classnames";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import { setDropdownsStatuses } from "redux/actions";
import Dropdown from "components/Header/DropdownMenu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import styles from "./style.module.scss";

const HeaderCell = ({ id, text, field, extraClass }) => {
  const dispatch = useDispatch();
  const dropdownsStatuses = useSelector(
    (state) => state.dropdownsState.dropdownsStatuses
  );

  const showMenuHelper = (columnName) => () => {
    if (columnName === dropdownsStatuses.isMenuColumn) {
      dispatch(
        setDropdownsStatuses({
          isMenuColumn: null,
        })
      );
    } else {
      dispatch(
        setDropdownsStatuses({
          isFilter: false,
          isModal: false,
          isMenuColumn: columnName,
        })
      );
    }
  };
  return (
    <>
      <p className={styles.separator}>|</p>
      <div className={cn(styles.headerCell, extraClass)}>
        <p className={styles.cellName}>{text}</p>
        <div className={styles.cellButtons}>
          <button>
            <ArrowUpwardIcon />
          </button>

          <button>
            <MoreVertIcon onClick={showMenuHelper(id)} />
          </button>

          {id === dropdownsStatuses.isMenuColumn && <Dropdown />}
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
