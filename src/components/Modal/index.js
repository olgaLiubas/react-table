import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";

import { setEditCountry, prepareNewPutReguest } from "bus/country/actions";
import { showModal } from "bus/ui/actions";
import AlertMsg from "./Alert";
import ChangeCountryDataForm from "./ChangeCountryDataForm";

import styles from "./style.module.scss";

const Modal = () => {
  const dispatch = useDispatch();

  const loadingPut = useSelector((state) => state.countriesState.loadingPut);
  const successPut = useSelector((state) => state.countriesState.successPut);
  const errorPut = useSelector((state) => state.countriesState.errorPut);

  const onShowModalHelper = () => {
    dispatch(showModal(null));
    dispatch(setEditCountry(null));
    dispatch(prepareNewPutReguest());
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
            msg={"This is an error alert"}
            type={"error"}
            func={onShowModalHelper}
          />
        )}

        {successPut && (
          <AlertMsg
            msg={"This is an success alert"}
            type={"success"}
            func={onShowModalHelper}
          />
        )}

        {!loadingPut && !errorPut && !successPut && <ChangeCountryDataForm />}
      </div>
    </div>
  );
};

export default Modal;
