import { connect } from "react-redux";

// import Row from "components/Row/";
// import Footer from "components/Footer";
// import Header from "components/Header";
// import { useFetchCountriesContext } from "bus/countriesData/fetchCountriesContext";
import { decrementCounter, incrementCounter } from "redux/actions";

import styles from "./App.module.scss";

const App = (props) => {
  // const { countries } = useFetchCountriesContext();
  const { counter, onIncrement, onDecrement } = props;
  console.log(props);

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

const mapStateToProps = (state) => ({
  counter: state.counterState.counter,
});

const mapDispatchToProps = {
  onIncrement: incrementCounter,
  onDecrement: decrementCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
