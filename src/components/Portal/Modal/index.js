import { useDispatch, useSelector } from "react-redux";

import {
  setEditCountry,
  prepareNewUpdatingReguest,
  prepareNewFetchingReguest,
  fetchForNextTimes,
} from "bus/country/actions";
import { hideModal } from "bus/ui/actions";
import AlertMsg from "components/Portal/Modal/Alert";
import { getEditCountry } from "bus/country/selectors";
import CircularProgress from "@mui/material/CircularProgress";
import { getUpdatingCountriesStatuses } from "bus/country/selectors";
import { getFetchingCountriesStatuses } from "bus/country/selectors";
import ChangeCountryDataForm from "components/Portal/Modal/ChangeCountryDataForm";

import styles from "./style.module.scss";

const Modal = () => {
  const dispatch = useDispatch();

  const updatingStatuses = useSelector(getUpdatingCountriesStatuses);
  const fetchingStatuses = useSelector(getFetchingCountriesStatuses);
  const editCountry = useSelector(getEditCountry);

  const onShowModalHelper = () => {
    dispatch(hideModal());
    if (updatingStatuses.error) {
      dispatch(setEditCountry(null));
      dispatch(prepareNewUpdatingReguest());
    }
    if (updatingStatuses.success) {
      dispatch(setEditCountry(null));
      dispatch(prepareNewUpdatingReguest());
      dispatch(fetchForNextTimes());
    }
    if (fetchingStatuses.error) {
      dispatch(prepareNewFetchingReguest());
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
            msg={"Country data was changed successfully!"}
            type={"success"}
            func={onShowModalHelper}
          />
        )}

        {!editCountry && fetchingStatuses.success && (
          <AlertMsg
            msg={"Country data was loaded successfully!"}
            type={"success"}
            func={onShowModalHelper}
          />
        )}

        {editCountry &&
          !updatingStatuses.loading &&
          !updatingStatuses.error &&
          !updatingStatuses.success &&
          fetchingStatuses.success && <ChangeCountryDataForm />}
      </div>
    </div>
  );
};

export default Modal;
