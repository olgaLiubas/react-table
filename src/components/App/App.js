import { useDispatch, useSelector } from "react-redux";

import Row from "components/Row/";
import Footer from "components/Footer";
import Header from "components/Header";

import styles from "./App.module.scss";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countriesState.countries);

  useEffect(() => {
    dispatch({ type: "FETCH" });
  }, []);

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
