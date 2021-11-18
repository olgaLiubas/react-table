import PropTypes from "prop-types";
import cn from "classnames";

import styles from "components/Row/RowCell/style.module.scss";

const RowCell = ({ extraClass, country }) => (
  <div className={cn(styles.rowCell, styles[extraClass])}>
    {country[extraClass]}
  </div>
);

RowCell.propTypes = {
  country: PropTypes.object,
  nameOfField: PropTypes.string,
};

export default RowCell;
