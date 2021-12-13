import { useSelector } from "react-redux";

import { getUiState } from "bus/ui/selectors";
import Filter from "components/Header/Filter";
import HeaderCell from "components/Header/HeaderCell";
import { cellsNamesConfig } from "constants/cellsNamesConfig";

import styles from "./style.module.scss";

const Header = () => {
  const ui = useSelector(getUiState);

  return (
    <header className={styles.header}>
      <input
        type="checkbox"
        name="checkbox-header"
        className={styles.headerCheckbox}
      />

      {cellsNamesConfig.map(
        (cell) =>
          ui.columns[cell.nameInUiState] && (
            <HeaderCell
              key={cell.id}
              id={cell.id}
              text={cell.nameOfHeaderColumn}
              extraClass={styles[cell.id]}
              columnName={cell.nameInUiState}
              fieldInArray={cell.fieldInCountries}
            />
          )
      )}

      {ui.isFilter ? <Filter /> : null}
    </header>
  );
};

export default Header;
