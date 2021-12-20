import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";

import { BOOK } from "navigation/book";
import Navigation from "navigation/NavigationMenu";
import LoginPage from "containers/LoginPage";
import CitiesPage from "containers/CitiesPage";
import StatesPage from "containers/StatesPage";
import { isUserLogined } from "bus/ui/selectors";
import CountriesPage from "containers/CountriesPage";

import styles from "./App.module.scss";

const App = () => {
  const loginedUser = useSelector(isUserLogined);

  return (
    <div className={styles.App}>
      <Router>
        <header className={styles.header}>
          <Navigation />
        </header>

        {loginedUser ? (
          <Routes>
            <Route
              path={BOOK.CONTENT.STATES}
              element={<StatesPage styles={styles} />}
            />

            <Route
              path={BOOK.CONTENT.CITIES}
              element={<CitiesPage styles={styles} />}
            />

            <Route
              path={BOOK.CONTENT.COUNTRIES}
              element={<CountriesPage styles={styles} />}
            />

            <Route
              path="*"
              element={<Navigate to={BOOK.CONTENT.COUNTRIES} />}
            />
          </Routes>
        ) : (
          <Routes>
            <Route
              path={BOOK.AUTH.SIGN_IN}
              element={<LoginPage styles={styles} />}
            />

            <Route path="*" element={<Navigate to={BOOK.AUTH.SIGN_IN} />} />
          </Routes>
        )}
      </Router>
    </div>
  );
};

export default App;
