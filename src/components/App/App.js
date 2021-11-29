import { useDispatch, useSelector } from "react-redux";

// import Row from "components/Row/";
// import Footer from "components/Footer";
// import Header from "components/Header";
import { decrementCounter, incrementCounter } from "redux/actions";
// import { useFetchCountriesContext } from "bus/countriesData/fetchCountriesContext";

import styles from "./App.module.scss";

const App = () => {
  // const { countries } = useFetchCountriesContext();
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counterState.counter);

  const onIncrement = () => dispatch(incrementCounter());
  const onDecrement = () => dispatch(decrementCounter());

  return (
    <div className={styles.table}>
      <p>Counter: {counter}</p>
      <button onClick={onIncrement}>"+1"</button>
      <button onClick={onDecrement}>"-1"</button>
      {/* <Header />

      {countries.map((country) => (
        <Row key={country.id} country={country} />
      ))}

      <Footer /> */}
    </div>
  );
};

export default App;
