import PropTypes from "prop-types";

import Row from "components/Row/";
import Footer from "components/Footer";
import Header from "components/Header";
import useGetRequest from "bus/useGetRequest";

import styles from "./App.module.scss";

const App = () => {
  const countries = useGetRequest(
    "http://localhost:4000/countries?_sort=id&_order=asc&_limit=20&_page=1"
  );

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
