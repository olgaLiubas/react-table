import { useDispatch, useSelector } from "react-redux";

import AlertMsg from "./Alert";
import { showModal } from "bus/ui/actions";
import ChangeCountryDataForm from "./ChangeCountryDataForm";
import CircularProgress from "@mui/material/CircularProgress";
import {
  setEditCountry,
  prepareNewPutReguest,
  prepareNewGetReguest,
  fetchForNextTimes,
} from "bus/country/actions";

import styles from "./style.module.scss";

const Modal = () => {
  const dispatch = useDispatch();

  const loadingPut = useSelector((state) => state.countriesState.loadingPut);
  const successPut = useSelector((state) => state.countriesState.successPut);
  const errorPut = useSelector((state) => state.countriesState.errorPut);

  const successGet = useSelector((state) => state.countriesState.successGet);
  const errorGet = useSelector((state) => state.countriesState.errorGet);

  const editCountry = useSelector((state) => state.countriesState.editCountry);

  const onShowModalHelper = () => {
    dispatch(showModal(false));
    if (errorPut) {
      dispatch(setEditCountry(null));
      dispatch(prepareNewPutReguest());
    }
    if (successPut) {
      dispatch(setEditCountry(null));
      dispatch(prepareNewPutReguest());
      dispatch(fetchForNextTimes());
    }
    if (errorGet) {
      dispatch(prepareNewGetReguest());
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

        {loadingPut && (
          <CircularProgress color="inherit" className={styles.loader} />
        )}

        {errorPut && (
          <AlertMsg
            msg={errorPut.message}
            type={"error"}
            func={onShowModalHelper}
          />
        )}

        {!editCountry && errorGet && (
          <AlertMsg
            msg={errorGet.message}
            type={"error"}
            func={onShowModalHelper}
          />
        )}

        {successPut && (
          <AlertMsg
            msg={"Country data was changed successfully!"}
            type={"success"}
            func={onShowModalHelper}
          />
        )}

        {!editCountry && successGet && (
          <AlertMsg
            msg={"Country data was loaded successfully!"}
            type={"success"}
            func={onShowModalHelper}
          />
        )}

        {editCountry &&
          !loadingPut &&
          !errorPut &&
          !successPut &&
          successGet && <ChangeCountryDataForm />}
      </div>
    </div>
  );
};

export default Modal;
