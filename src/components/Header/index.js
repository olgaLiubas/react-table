import PropTypes from "prop-types";

import HeaderCell from "components/Header/HeaderCell";

import styles from "./style.module.scss";

const Header = ({ cellsNamesConfig }) => (
  <header className={styles.header}>
    <input
      type="checkbox"
      name="checkbox-header"
      className={styles.headerCheckbox}
    />

    {cellsNamesConfig.map((cell) => (
      <HeaderCell
        key={cell.id}
        text={cell.nameOfHeaderColumn}
        field={cell.fieldInCountries}
        extraClass={styles[cell.id]}
      />
    ))}
  </header>
);

Header.propTypes = {
  cellsNamesConfig: PropTypes.array,
};

export default Header;
