import cn from "classnames";
import PropTypes from "prop-types";

import Dropdown from "components/Header/HeaderCell/DropdownMenu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import styles from "./style.module.scss";

const HeaderCell = ({
  id,
  text,
  field,
  extraClass,
  isMenu,
  showMenu,
  activeColumn,
  setterActiveColumn,
  showFilter,
}) => {
  const showMenuHelper = (e) => {
    const columnsIds = [
      "id",
      "name",
      "capital",
      "phoneCode",
      "currency",
      "iso",
    ];
    const columnName = columnsIds.find((name) =>
      e.target.parentElement.parentElement.parentElement.className.includes(
        `${name}`
      )
    );
    if (columnName === activeColumn) {
      showMenu(!isMenu);
    } else if (columnName !== activeColumn && isMenu) {
      setterActiveColumn(columnName);
    } else {
      setterActiveColumn(columnName);
      showMenu(!isMenu);
    }
    e.stopPropagation();
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

          <button onClick={(e) => showMenuHelper(e)}>
            <MoreVertIcon onClick={(e) => showMenuHelper(e)} />
          </button>

          {id === activeColumn && isMenu && (
            <Dropdown
              activeColumn={activeColumn}
              showFilter={(bool) => showFilter(bool)}
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
  isMenu: PropTypes.bool,
  activeColumn: PropTypes.string,
  setterActiveColumn: PropTypes.func,
  showFilter: PropTypes.func,
};

export default HeaderCell;
