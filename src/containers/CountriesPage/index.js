import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Row from "components/Row";
import Footer from "components/Footer";
import Header from "components/Header";
import Portal from "components/Portal";

import CircularProgress from "@mui/material/CircularProgress";

import { countriesCellsNamesConfig } from "constants/countriesCellsNamesConfig";
import * as selectors from "bus/country/selectors";
import * as actions from "bus/country/actions";

const CountriesPage = ({ styles }) => {
  const dispatch = useDispatch();
  const arrayOfData = useSelector(selectors.getData);
  const fetchingStatuses = useSelector(selectors.getFetchingStatuses);

  useEffect(() => {
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

        <Portal selectors={selectors} actions={actions} />

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

        <Footer actions={actions} />
      </div>
    </>
  );
};

export default CountriesPage;
