import { useState } from "react";
import PropTypes from "prop-types";

import Filter from "components/Header/Filter";
import HeaderCell from "components/Header/HeaderCell";
import cellsNamesConfig from "constants/cellsNamesConfig";

import styles from "./style.module.scss";

const Header = () => {
  const [activeColumn, setActiveColumn] = useState();
  const [isMenu, setIsMenu] = useState(false);
  const [isFilter, setIsFilter] = useState(false);

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
          showMenu={(bool) => setIsMenu(bool)}
          activeColumn={activeColumn}
          setterActiveColumn={(column) => setActiveColumn(column)}
          showFilter={(bool) => setIsFilter(bool)}
        />
      ))}

      {isFilter ? <Filter showFilter={(bool) => setIsFilter(bool)} /> : null}
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
