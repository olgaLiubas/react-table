import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Row from "components/Row/";
import Footer from "components/Footer";
import Header from "components/Header";
import Portal from "components/Portal";
import { fetchForSaga } from "bus/country/actions";
import { getCountries } from "bus/country/selectors";

import CircularProgress from "@mui/material/CircularProgress";
import { getFetchingCountriesStatuses } from "bus/country/selectors";

import styles from "./App.module.scss";

const App = () => {
  const dispatch = useDispatch();
  const countries = useSelector(getCountries);
  const fetchingStatuses = useSelector(getFetchingCountriesStatuses);

  useEffect(() => {
    dispatch(fetchForSaga());
  }, []);

  return (
    <div className={styles.table}>
      <Header />

      <div id="modal_place" className={styles.modalPlace}></div>

      <Portal />

      {fetchingStatuses.loading && (
        <CircularProgress color="inherit" className={styles.loader} />
      )}

      {fetchingStatuses.success && !fetchingStatuses.loading && (
        <>
          {countries.map((country) => (
            <Row key={country.id} country={country} />
          ))}
        </>
      )}

      <Footer />
    </div>
  );
};

export default App;
