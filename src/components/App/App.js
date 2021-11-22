import { useState } from "react";
import PropTypes from "prop-types";

import Row from "components/Row/";
import Footer from "components/Footer";
import Header from "components/Header";
import countries from "constants/countries";
import cellsNamesConfig from "constants/cellsNamesConfig";

import styles from "./App.module.scss";

const App = () => {
  const [isModal, setIsModal] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const [isFilter, setIsFilter] = useState(false);

  const showOneDropdown = (setActiveDropdown, bool) => {
    // eslint-disable-next-line no-unused-expressions
    isFilter ? setIsFilter(false) : null;
    // eslint-disable-next-line no-unused-expressions
    isMenu ? setIsMenu(false) : null;
    // eslint-disable-next-line no-unused-expressions
    isModal ? setIsModal(false) : null;
    setActiveDropdown(bool);
  };

  return (
    <div className={styles.table}>
      <Header
        cellsNamesConfig={cellsNamesConfig}
        isMenu={isMenu}
        isFilter={isFilter}
        showMenu={(bool) => showOneDropdown(setIsMenu, bool)}
        showFilter={(bool) => showOneDropdown(setIsFilter, bool)}
      />

      {countries.map((country) => (
        <Row
          key={country.id}
          isModal={isModal}
          showModal={(bool) => showOneDropdown(setIsModal, bool)}
          country={country}
          cellsNamesConfig={cellsNamesConfig}
        />
      ))}

      <Footer />
    </div>
  );
};

App.propTypes = {
  countries: PropTypes.array,
  cellsNamesConfig: PropTypes.array,
};

export default App;
