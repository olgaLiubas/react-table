import PropTypes from "prop-types";

import Row from "components/Row/";
import Footer from "components/Footer";
import Header from "components/Header";
import countries from "constants/countries";
import cellsNamesConfig from "constants/cellsNamesConfig";

import styles from "./App.module.scss";
import { useState } from "react";

const App = () => {
  const [showEditForm, setShowEditForm] = useState(false);
  return (
    <div className={styles.table}>
      <Header
        cellsNamesConfig={cellsNamesConfig}
        showEditForm={showEditForm}
        hideEditForm={(bool) => setShowEditForm(bool)}
      />

      {countries.map((country) => (
        <Row
          key={country.id}
          onEditClick={(val) => setShowEditForm(val)}
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
