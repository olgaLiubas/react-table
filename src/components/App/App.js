import PropTypes from "prop-types";

import Row from "components/Row/";
import Footer from "components/Footer";
import Header from "components/Header";
import countries from "constants/countries";

import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.table}>
      <Header />

      {countries.map((country) => (
        <Row key={country.id} country={country} />
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
