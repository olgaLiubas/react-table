import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "navigation/nav";
import LoginPage from "containers/LoginPage";
import CitiesPage from "containers/CitiesPage";
import StatesPage from "containers/StatesPage";
import CountriesPage from "containers/CountriesPage";

import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.App}>
      <Router>
        <header className={styles.header}>
          <Navigation />
        </header>
        <Routes>
          <Route path="/states" element={<StatesPage styles={styles} />} />
          <Route path="/cities" element={<CitiesPage styles={styles} />} />
          <Route
            path="/countries"
            element={<CountriesPage styles={styles} />}
          />
          <Route path="/" element={<LoginPage styles={styles} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
