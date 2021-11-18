import PropTypes from "prop-types";
import cn from "classnames";

import styles from "components/Header/style.module.scss";

const HeaderCell = ({ name, extraClass }) => {
  return (
    <>
      <p className={styles.separator}>|</p>
      <div className={cn(styles.headerCell, styles[extraClass])}>
        <p className={styles.cellName}>{name}</p>
        <div className={styles.cellButtons}></div>
      </div>
    </>
  );
};

HeaderCell.propTypes = {
  name: PropTypes.string,
  extraClass: PropTypes.string,
};

export default HeaderCell;
