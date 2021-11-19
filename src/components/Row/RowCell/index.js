import PropTypes from "prop-types";
import cn from "classnames";

import styles from "./style.module.scss";

const RowCell = ({ extraClass, text }) => (
  <div className={cn(styles.rowCell, extraClass)}>{text}</div>
);

RowCell.propTypes = {
  extraClass: PropTypes.string,
  text: PropTypes.string,
};

export default RowCell;
