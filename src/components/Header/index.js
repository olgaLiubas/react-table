import PropTypes from "prop-types";

import Filter from "components/Header/Filter";
import Modal from "components/Header/Modal";
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

    <Filter showFilter={false} />
    <Modal showModal={false} />
  </header>
);

Header.propTypes = {
  cellsNamesConfig: PropTypes.array,
};

export default Header;
