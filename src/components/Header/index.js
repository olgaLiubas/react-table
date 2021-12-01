import { useSelector } from "react-redux";

import Filter from "components/Header/Filter";
import HeaderCell from "components/Header/HeaderCell";
import { cellsNamesConfig } from "constants/cellsNamesConfig";

import styles from "./style.module.scss";

const Header = () => {
  const ui = useSelector((state) => state.ui);

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

      {ui.isFilter ? <Filter /> : null}
    </header>
  );
};

export default Header;
