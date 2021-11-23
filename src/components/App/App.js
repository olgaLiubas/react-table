import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import Row from "components/Row/";
import Footer from "components/Footer";
import Header from "components/Header";

import styles from "./App.module.scss";

const App = () => {
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("http://localhost:4000/countries");
        setCountries(response.data);
      } catch (e) {
        alert(`Sorry, something go wrong. Try later!`);
      }
    }
    getData();
  }, []);

  return countries ? (
    <div className={styles.table}>
      <Header />

      {countries.map((country) => (
        <Row key={country.id} country={country} />
      ))}

      <Footer />
    </div>
  ) : (
    <p>Loading ...</p>
  );
};

App.propTypes = {
  countries: PropTypes.array,
  cellsNamesConfig: PropTypes.array,
};

export default App;
