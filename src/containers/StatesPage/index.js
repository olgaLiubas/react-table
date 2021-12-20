import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Row from "components/Row";
import Footer from "components/Footer";
import Header from "components/Header";
import Portal from "components/Portal";
import * as actions from "bus/states/actions";
import { setNewRouterPage } from "bus/ui/actions";
import * as selectors from "bus/states/selectors";
import { amountOfPlaces } from "constants/amountOfPlaces";
import CircularProgress from "@mui/material/CircularProgress";
import { statesCellsNamesConfig } from "constants/statesCellsNamesConfig";

import styles from "../style.module.scss";

const StatesPage = () => {
  const dispatch = useDispatch();
  const arrayOfData = useSelector(selectors.getData);
  const fetchingStatuses = useSelector(selectors.getFetchingStatuses);

  useEffect(() => {
    dispatch(setNewRouterPage("states"));
    dispatch(actions.fetchForSaga());
  }, []);

  return (
    <>
      <div className={styles.table}>
        <Header
          cellsNamesConfig={statesCellsNamesConfig}
          selectors={selectors}
          actions={actions}
        />

        <div id="modal_place" className={styles.modalPlace}></div>

        <Portal
          selectors={selectors}
          actions={actions}
          cellsNamesConfig={statesCellsNamesConfig}
        />

        {fetchingStatuses.loading && (
          <CircularProgress color="inherit" className={styles.loader} />
        )}

        {fetchingStatuses.success && !fetchingStatuses.loading && (
          <>
            {arrayOfData.map((item) => (
              <Row
                key={item.id}
                item={item}
                cellsNamesConfig={statesCellsNamesConfig}
                selectors={selectors}
                actions={actions}
              />
            ))}
          </>
        )}

        <Footer actions={actions} amountOfPlaces={amountOfPlaces.states} />
      </div>
    </>
  );
};

export default StatesPage;
