import PropTypes from "prop-types";

import Row from "components/Row/";
import Footer from "components/Footer";
import Header from "components/Header";
import countries from "constants/countries";
import cellsNamesConfig from "constants/cellsNamesConfig";

import styles from "./App.module.scss";

const App = () => (
  <div className={styles.table}>
    <Header cellsNamesConfig={cellsNamesConfig} />

    {countries.map((country) => (
      <Row
        key={country.id}
        country={country}
        cellsNamesConfig={cellsNamesConfig}
      />
    ))}

    <Footer />
  </div>
);

App.propTypes = {
  countries: PropTypes.array,
  cellsNamesConfig: PropTypes.array,
};

export default App;
