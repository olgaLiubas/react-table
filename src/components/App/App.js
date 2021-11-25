import PropTypes from "prop-types";

import Row from "components/Row/";
import Footer from "components/Footer";
import Header from "components/Header";
import { useFetchCountriesContext } from "bus/countriesData/fetchCountriesContext";

import styles from "./App.module.scss";

const App = () => {
  const fetchCountriesContext = useFetchCountriesContext();
  console.log(fetchCountriesContext);
  fetchCountriesContext.useSetCountries();

  return (
    <div className={styles.table}>
      <Header />

      {fetchCountriesContext.countries.map((country) => (
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
