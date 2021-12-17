import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Row from "components/Row";
import Footer from "components/Footer";
import Header from "components/Header";
import Portal from "components/Portal";
import { setNewRouterPage } from "bus/ui/actions";
import * as actions from "bus/countries/actions";
import * as selectors from "bus/countries/selectors";
import { amountOfPlaces } from "constants/amountOfPlaces";
import CircularProgress from "@mui/material/CircularProgress";
import { countriesCellsNamesConfig } from "constants/countriesCellsNamesConfig";

const CountriesPage = ({ styles }) => {
  const dispatch = useDispatch();
  const arrayOfData = useSelector(selectors.getData);
  const fetchingStatuses = useSelector(selectors.getFetchingStatuses);

  useEffect(() => {
    dispatch(setNewRouterPage("countries"));
    dispatch(actions.fetchForSaga());
  }, []);

  return (
    <>
      <div className={styles.table}>
        <Header
          cellsNamesConfig={countriesCellsNamesConfig}
          selectors={selectors}
          actions={actions}
        />

        <div id="modal_place" className={styles.modalPlace}></div>

        <Portal
          selectors={selectors}
          actions={actions}
          cellsNamesConfig={countriesCellsNamesConfig}
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
                cellsNamesConfig={countriesCellsNamesConfig}
                selectors={selectors}
                actions={actions}
              />
            ))}
          </>
        )}

        <Footer actions={actions} amountOfPlaces={amountOfPlaces.countries} />
      </div>
    </>
  );
};

export default CountriesPage;
