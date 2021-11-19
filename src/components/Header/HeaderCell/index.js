import cn from "classnames";
import PropTypes from "prop-types";

import Dropdown from "components/Header/HeaderCell/DropdownMenu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import styles from "./style.module.scss";

const HeaderCell = ({ text, field, extraClass }) => {
  return (
    <>
      <p className={styles.separator}>|</p>
      <div className={cn(styles.headerCell, extraClass)}>
        <p className={styles.cellName}>{text}</p>
        <div className={styles.cellButtons}>
          <ArrowUpwardIcon />
          <MoreVertIcon />
          <Dropdown field={field} showMenu />
        </div>
      </div>
    </>
  );
};

HeaderCell.propTypes = {
  text: PropTypes.string,
  field: PropTypes.string,
  extraClass: PropTypes.string,
};

export default HeaderCell;
