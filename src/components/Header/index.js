import React from "react";
import PropTypes from "prop-types";

import HeaderCell from "components/Header/HeaderCell";

import styles from "components/Header/style.module.scss";

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
        name={cell.nameOfHeaderColumn}
        extraClass={cell.nameOfClass}
      />
    ))}
  </header>
);

Header.propTypes = {
  cellsNamesConfig: PropTypes.array,
};

export default Header;
