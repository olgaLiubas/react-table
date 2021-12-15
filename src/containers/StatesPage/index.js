// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import Row from "components/states/Row";
// import Footer from "components/states/Footer";
// import Header from "components/states/Header";
// import Portal from "components/states/Portal";
// import { fetchForSagaStates } from "bus/states/actions";
// import { getStates } from "bus/states/selectors";

// import CircularProgress from "@mui/material/CircularProgress";
// import { getFetchingStatesStatuses } from "bus/states/selectors";

const StatesPage = ({ styles }) => {
  // const dispatch = useDispatch();
  // const states = useSelector(getStates);
  // const fetchingStatuses = useSelector(getFetchingStatesStatuses);

  // useEffect(() => {
  //   dispatch(fetchForSagaStates());
  // }, []);

  return (
    <div className={styles.table}>
      <p>States</p>
      {/* <Header />

      <div id="modal_place" className={styles.modalPlace}></div>

      <Portal />

      {fetchingStatuses.loading && (
        <CircularProgress color="inherit" className={styles.loader} />
      )}

      {fetchingStatuses.success && !fetchingStatuses.loading && (
        <>
          {states.map((state) => (
            <Row key={state.id} state={state} />
          ))}
        </>
      )}

      <Footer /> */}
    </div>
  );
};

export default StatesPage;
