import { useSelector } from "react-redux";

import { getUiState } from "bus/ui/selectors";
import Filter from "components/Header/Filter";
import HeaderCell from "components/Header/HeaderCell";

import styles from "./style.module.scss";

const Header = ({ cellsNamesConfig, selectors, actions }) => {
  const ui = useSelector(getUiState);
  const columns = useSelector(selectors.getColumnsStatuses);

  return (
    <header className={styles.header}>
      <input
        type="checkbox"
        name="checkbox-header"
        className={styles.headerCheckbox}
      />

      {cellsNamesConfig.map(
        (cell) =>
          columns[cell.nameInUiState] && (
            <HeaderCell
              key={cell.id}
              id={cell.id}
              text={cell.nameOfHeaderColumn}
              extraClass={styles[cell.id]}
              columnName={cell.nameInUiState}
              fieldInArray={cell.fieldInArray}
              selectors={selectors}
              actions={actions}
            />
          )
      )}

      {ui.isFilter ? (
        <Filter actions={actions} cellsNamesConfig={cellsNamesConfig} />
      ) : null}
    </header>
  );
};

export default Header;
