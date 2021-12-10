import ReactDOM from "react-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Row from "components/Row/";
import Modal from "components/Modal";
import Footer from "components/Footer";
import Header from "components/Header";
import { fetchForSaga } from "bus/country/actions";
import CircularProgress from "@mui/material/CircularProgress";

import styles from "./App.module.scss";

const App = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countriesState.countries);
  const loadingGet = useSelector((state) => state.countriesState.loadingGet);
  const successGet = useSelector((state) => state.countriesState.successGet);
  const isModal = useSelector((state) => state.ui.isModal);

  useEffect(() => {
    dispatch(fetchForSaga());
  }, []);

  return (
    <div className={styles.table}>
      <Header />

      <div id="modal_place" className={styles.modalPlace}></div>

      {isModal &&
        ReactDOM.createPortal(
          <Modal />,
          document.getElementById("modal_place")
        )}

      {loadingGet && (
        <CircularProgress color="inherit" className={styles.loader} />
      )}

      {successGet && !loadingGet && (
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
