import { useState } from "react";

import Filter from "components/Header/Filter";
import HeaderCell from "components/Header/HeaderCell";
import cellsNamesConfig from "constants/cellsNamesConfig";
import { useDropdownsContext } from "bus/UI/dropdownsContext";

import styles from "./style.module.scss";

const Header = () => {
  const dropdownsContext = useDropdownsContext();

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
        />
      ))}

      {dropdownsContext.dropdownsStatuses.isFilter ? <Filter /> : null}
    </header>
  );
};

export default Header;
