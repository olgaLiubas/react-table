import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Row from "components/Row/";
import { getData } from "bus/getData";
import Footer from "components/Footer";
import Header from "components/Header";
import { setCountries } from "redux/actions";
import { initialUrl } from "constants/initialUrl";

import styles from "./App.module.scss";

const App = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countriesState.countries);

  useEffect(() => {
    getData(initialUrl, setCountries, dispatch);
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
