import { useDispatch, useSelector } from "react-redux";

import { getEditPlace, getRouterPage } from "bus/ui/selectors";
import AlertMsg from "components/Portal/Modal/Alert";
import { setEditPlace, hideModal } from "bus/ui/actions";
import CircularProgress from "@mui/material/CircularProgress";
import ChangeCityDataForm from "components/Portal/Modal/ChangeCountryDataForm/formForCities";
import ChangeStateDataForm from "components/Portal/Modal/ChangeCountryDataForm/formForStates";
import ChangeCountryDataForm from "components/Portal/Modal/ChangeCountryDataForm/formForCountries";

import styles from "./style.module.scss";

const Modal = ({ selectors, actions, cellsNamesConfig }) => {
  const dispatch = useDispatch();
  const routerPage = useSelector(getRouterPage);
  const updatingStatuses = useSelector(selectors.getUpdatingStatuses);
  const fetchingStatuses = useSelector(selectors.getFetchingStatuses);
  const editCountry = useSelector(getEditPlace);

  const onShowModalHelper = () => {
    dispatch(hideModal());
    if (updatingStatuses.error) {
      dispatch(setEditPlace(null));
      dispatch(actions.prepareNewUpdatingReguest());
    }
    if (updatingStatuses.success) {
      dispatch(setEditPlace(null));
      dispatch(actions.prepareNewUpdatingReguest());
      dispatch(actions.fetchForNextTimes());
    }
    if (fetchingStatuses.error) {
      dispatch(actions.prepareNewFetchingReguest());
    }
  };

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modal}>
        <button
          type="reset"
          className={styles.resetBtn}
          onClick={onShowModalHelper}
        >
          x
        </button>

        {updatingStatuses.loading && (
          <CircularProgress color="inherit" className={styles.loader} />
        )}

        {updatingStatuses.error && (
          <AlertMsg
            msg={updatingStatuses.error.message}
            type={"error"}
            func={onShowModalHelper}
          />
        )}

        {!editCountry && fetchingStatuses.error && (
          <AlertMsg
            msg={fetchingStatuses.error.message}
            type={"error"}
            func={onShowModalHelper}
          />
        )}

        {updatingStatuses.success && (
          <AlertMsg
            msg={"Data was changed successfully!"}
            type={"success"}
            func={onShowModalHelper}
          />
        )}

        {!editCountry && fetchingStatuses.success && (
          <AlertMsg
            msg={"Data was loaded successfully!"}
            type={"success"}
            func={onShowModalHelper}
          />
        )}

        {routerPage === "cities" &&
          editCountry &&
          !updatingStatuses.loading &&
          !updatingStatuses.error &&
          !updatingStatuses.success &&
          fetchingStatuses.success && (
            <ChangeCityDataForm
              actions={actions}
              cellsNamesConfig={cellsNamesConfig}
            />
          )}

        {routerPage === "countries" &&
          editCountry &&
          !updatingStatuses.loading &&
          !updatingStatuses.error &&
          !updatingStatuses.success &&
          fetchingStatuses.success && (
            <ChangeCountryDataForm
              actions={actions}
              cellsNamesConfig={cellsNamesConfig}
            />
          )}

        {routerPage === "states" &&
          editCountry &&
          !updatingStatuses.loading &&
          !updatingStatuses.error &&
          !updatingStatuses.success &&
          fetchingStatuses.success && (
            <ChangeStateDataForm
              actions={actions}
              cellsNamesConfig={cellsNamesConfig}
            />
          )}
      </div>
    </div>
  );
};

export default Modal;
