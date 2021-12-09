import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Row from "components/Row/";
import Footer from "components/Footer";
import Header from "components/Header";
import CircularProgress from "@mui/material/CircularProgress";

import { fetchForSaga } from "bus/country/actions";

import styles from "./App.module.scss";

const App = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countriesState.countries);
  const loadingGet = useSelector((state) => state.countriesState.loadingGet);
  const successGet = useSelector((state) => state.countriesState.successGet);

  useEffect(() => {
    dispatch(fetchForSaga());
  }, []);

  return (
    <div className={styles.table}>
      <div id="modal_place" className={styles.modalPlace}></div>
      {loadingGet && (
        <CircularProgress color="inherit" className={styles.loader} />
      )}

      {successGet && !loadingGet && (
        <>
          <Header />

          {countries.map((country) => (
            <Row key={country.id} country={country} />
          ))}

          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
