import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Row from "components/Row";
import Footer from "components/Footer";
import Header from "components/Header";
import Portal from "components/Portal";
import * as actions from "bus/cities/actions";
import { setNewRouterPage } from "bus/ui/actions";
import * as selectors from "bus/cities/selectors";
import { amountOfPlaces } from "constants/amountOfPlaces";
import CircularProgress from "@mui/material/CircularProgress";
import { citiesCellsNamesConfig } from "constants/citiesCellsNamesConfig";

const CitiesPage = ({ styles }) => {
  const dispatch = useDispatch();
  const arrayOfData = useSelector(selectors.getData);
  const fetchingStatuses = useSelector(selectors.getFetchingStatuses);

  useEffect(() => {
    dispatch(setNewRouterPage("cities"));
    dispatch(actions.fetchForSaga());
  }, []);

  return (
    <>
      <div className={styles.table}>
        <Header
          cellsNamesConfig={citiesCellsNamesConfig}
          selectors={selectors}
          actions={actions}
        />

        <div id="modal_place" className={styles.modalPlace}></div>

        <Portal
          selectors={selectors}
          actions={actions}
          cellsNamesConfig={citiesCellsNamesConfig}
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
                cellsNamesConfig={citiesCellsNamesConfig}
                selectors={selectors}
                actions={actions}
              />
            ))}
          </>
        )}

        <Footer actions={actions} amountOfPlaces={amountOfPlaces.cities} />
      </div>
    </>
  );
};

export default CitiesPage;
