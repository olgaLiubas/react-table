import { useDispatch, useSelector } from "react-redux";

import { setEditCountry, hideModal } from "bus/ui/actions";
import AlertMsg from "components/Portal/Modal/Alert";
import { getEditCountry } from "bus/ui/selectors";
import CircularProgress from "@mui/material/CircularProgress";
import ChangeCountryDataForm from "components/Portal/Modal/ChangeCountryDataForm";

import styles from "./style.module.scss";

const Modal = ({ selectors, actions }) => {
  const dispatch = useDispatch();

  const updatingStatuses = useSelector(selectors.getUpdatingStatuses);
  const fetchingStatuses = useSelector(selectors.getFetchingStatuses);
  const editCountry = useSelector(getEditCountry);

  const onShowModalHelper = () => {
    dispatch(hideModal());
    if (updatingStatuses.error) {
      dispatch(setEditCountry(null));
      dispatch(actions.prepareNewUpdatingReguest());
    }
    if (updatingStatuses.success) {
      dispatch(setEditCountry(null));
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
          fetchingStatuses.success && (
            <ChangeCountryDataForm actions={actions} />
          )}
      </div>
    </div>
  );
};

export default Modal;
