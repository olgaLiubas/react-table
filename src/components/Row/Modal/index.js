import { useDispatch, useSelector } from "react-redux";

import {
  setEditCountry,
  setEditCountryName,
  setEditCountryCapital,
  setEditCountryPhoneCode,
  setEditCountryCurrency,
  setEditCountryIso,
  putForSaga,
} from "bus/country/actions";
import { showModal } from "bus/ui/actions";

import styles from "./style.module.scss";

const Modal = ({ country }) => {
  const editCountry = useSelector((state) => state.countriesState.editCountry);

  const dispatch = useDispatch();

  const onShowModalHelper = () => {
    dispatch(showModal(null));
    dispatch(setEditCountry(country));
    dispatch(showModal(null));
  };

  const onPutRequestHelper = () => {
    dispatch(putForSaga());
    dispatch(showModal(null));
    dispatch(setEditCountry(null));
  };

  const onChangeNameHelper = (e) => {
    dispatch(setEditCountryName(e.target.value));
  };

  const onChangeCapitalHelper = (e) => {
    dispatch(setEditCountryCapital(e.target.value));
  };

  const onChangePhoneCodeHelper = (e) => {
    dispatch(setEditCountryPhoneCode(e.target.value));
  };

  const onChangeCurrencyHelper = (e) => {
    dispatch(setEditCountryCurrency(e.target.value));
  };

  const onChangeIsoHelper = (e) => {
    dispatch(setEditCountryIso(e.target.value));
  };

  return (
    <div className={styles.modalActive}>
      <div className={styles.modalProp}>
        <p>ID № </p>
        <p>{country.id}</p>
      </div>
      <div className={styles.modalProp}>
        <p>Name:</p>
        <input
          value={editCountry.name}
          onChange={(e) => onChangeNameHelper(e)}
        />
      </div>
      <div className={styles.modalProp}>
        <p>Capital:</p>
        <input
          value={editCountry.capital}
          onChange={(e) => onChangeCapitalHelper(e)}
        />
      </div>
      <div className={styles.modalProp}>
        <p>Phone code:</p>
        <input
          value={editCountry.phone_code}
          onChange={(e) => onChangePhoneCodeHelper(e)}
        />
      </div>
      <div className={styles.modalProp}>
        <p>Currency:</p>
        <input
          value={editCountry.currency}
          onChange={(e) => onChangeCurrencyHelper(e)}
        />
      </div>
      <div className={styles.modalProp}>
        <p>ISO:</p>
        <input
          value={editCountry.iso3}
          onChange={(e) => onChangeIsoHelper(e)}
        />
      </div>
      <div className={styles.modalButtons}>
        <button type="button" onClick={onShowModalHelper}>
          CANCEL
        </button>
        <button type="button" onClick={onPutRequestHelper}>
          CHANGE
        </button>
      </div>
    </div>
  );
};

export default Modal;
