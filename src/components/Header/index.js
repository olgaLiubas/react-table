import { useState } from "react";
import PropTypes from "prop-types";

import Filter from "components/Header/Filter";
import HeaderCell from "components/Header/HeaderCell";

import styles from "./style.module.scss";

const Header = ({
  cellsNamesConfig,
  isMenu,
  isFilter,
  showMenu,
  showFilter,
}) => {
  const [activeColumn, setActiveColumn] = useState();

  return (
    <header className={styles.header}>
      <input
        type="checkbox"
        name="checkbox-header"
        className={styles.headerCheckbox}
      />

      {cellsNamesConfig.map((cell) => (
        <HeaderCell
          key={cell.id}
          id={cell.id}
          text={cell.nameOfHeaderColumn}
          field={cell.fieldInCountries}
          extraClass={styles[cell.id]}
          isMenu={isMenu}
          showMenu={(bool) => showMenu(bool)}
          activeColumn={activeColumn}
          setterActiveColumn={(column) => setActiveColumn(column)}
          showFilter={(bool) => showFilter(bool)}
        />
      ))}

      {isFilter ? <Filter showFilter={(bool) => showFilter(bool)} /> : null}
    </header>
  );
};

Header.propTypes = {
  cellsNamesConfig: PropTypes.array,
  isMenu: PropTypes.bool,
  isFilter: PropTypes.bool,
  showMenu: PropTypes.func,
  showFilter: PropTypes.func,
};

export default Header;
