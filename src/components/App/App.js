import { useDispatch, useSelector } from "react-redux";

import Row from "components/Row/";
import Footer from "components/Footer";
import Header from "components/Header";

import styles from "./App.module.scss";

const App = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countriesState.countries);

  return (
    <div className={styles.table}>
      <button
        className={styles.fetchButton}
        onClick={() => dispatch({ type: "FETCH" })}
        type="button"
      >
        FETCH COUNTRIES
      </button>
      <Header />

      {countries.map((country) => (
        <Row key={country.id} country={country} />
      ))}

      <Footer />
    </div>
  );
};

export default App;
