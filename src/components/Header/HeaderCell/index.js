import cn from "classnames";
import PropTypes from "prop-types";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import styles from "components/Header/HeaderCell/style.module.scss";

const HeaderCell = ({ name, extraClass }) => {
  return (
    <>
      <p className={styles.separator}>|</p>
      <div className={cn(styles.headerCell, styles[extraClass])}>
        <p className={styles.cellName}>{name}</p>
        <div className={styles.cellButtons}>
          <ArrowUpwardIcon />
          <MoreVertIcon />
        </div>
      </div>
    </>
  );
};

HeaderCell.propTypes = {
  name: PropTypes.string,
  extraClass: PropTypes.string,
};

export default HeaderCell;
