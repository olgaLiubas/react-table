import Row from "components/Row/";
import Footer from "components/Footer";
import Header from "components/Header";
import { useFetchCountriesContext } from "bus/countriesData/fetchCountriesContext";

import styles from "./App.module.scss";

const App = () => {
  const { countries } = useFetchCountriesContext();

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

export default App;
