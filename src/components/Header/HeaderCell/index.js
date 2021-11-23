import cn from "classnames";
import PropTypes from "prop-types";

import Dropdown from "components/Header/DropdownMenu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import styles from "./style.module.scss";

const HeaderCell = ({
  id,
  text,
  field,
  extraClass,
  activeColumn,
  setActiveColumn,
  setIsFilter,
}) => {
  const showMenuHelper = (columnName) => () => {
    if (columnName === activeColumn) {
      setActiveColumn(null);
    } else {
      setIsFilter(false);
      setActiveColumn(columnName);
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

          {id === activeColumn && (
            <Dropdown
              activeColumn={activeColumn}
              setActiveColumn={setActiveColumn}
              setIsFilter={setIsFilter}
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
  activeColumn: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  setActiveColumn: PropTypes.func,
  setIsFilter: PropTypes.func,
};

export default HeaderCell;
