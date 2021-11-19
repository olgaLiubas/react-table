import PropTypes from "prop-types";
import cn from "classnames";

import styles from "./style.module.scss";

const RowCell = ({ extraClass, field, country }) => (
  <div className={cn(styles.rowCell, styles[extraClass])}>{country[field]}</div>
);

RowCell.propTypes = {
  country: PropTypes.object,
  nameOfField: PropTypes.string,
};

export default RowCell;
