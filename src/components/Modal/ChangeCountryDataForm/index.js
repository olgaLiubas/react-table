import * as Yup from "yup";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";

import {
  setEditCountryName,
  setEditCountryCapital,
  setEditCountryPhoneCode,
  setEditCountryCurrency,
  setEditCountryIso,
  putForSaga,
} from "bus/country/actions";
import FieldModal from "components/Modal/ChangeCountryDataForm/Field";

import styles from "./style.module.scss";

const ChangeCountryDataForm = () => {
  const editCountry = useSelector((state) => state.countriesState.editCountry);

  const dispatch = useDispatch();

  const initialValues = {
    name: editCountry.name,
    capital: editCountry.capital,
    phone_code: editCountry.phone_code,
    currency: editCountry.currency,
    iso3: editCountry.iso3,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name is too short - should be 3 chars min"),
    capital: Yup.string()
      .required("Capital is required")
      .min(3, "Capital is too short - should be 3 chars min"),
    phone_code: Yup.string()
      .required("Phone code is required")
      .min(3, "Phone code is too short - should be 3 chars min"),
    currency: Yup.string()
      .required("Currency is required")
      .min(2, "Currency is too short - should be 3 chars min"),
    iso3: Yup.string()
      .required("ISO is required")
      .min(2, "ISO is too short - should be 3 chars min"),
  });

  const submitForm = (values) => {
    dispatch(setEditCountryName(values.name));
    dispatch(setEditCountryCapital(values.capital));
    dispatch(setEditCountryPhoneCode(values.phone_code));
    dispatch(setEditCountryCurrency(values.currency));
    dispatch(setEditCountryIso(values.iso3));
    dispatch(putForSaga());
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={submitForm}
    >
      {(formik) => {
        const { errors, touched, isValid, dirty } = formik;
        return (
          <Form className={styles.modalForm}>
            <div className={styles.modalId}>
              <p>ID № </p>
              <p>{editCountry.id}</p>
            </div>

            <FieldModal
              name={"Name:"}
              fieldValue={"name"}
              styles={styles}
              errors={errors}
              touched={touched}
            />

            <FieldModal
              name={"Capital:"}
              fieldValue={"capital"}
              styles={styles}
              errors={errors}
              touched={touched}
            />

            <FieldModal
              name={"Phone code:"}
              fieldValue={"phone_code"}
              styles={styles}
              errors={errors}
              touched={touched}
            />

            <FieldModal
              name={"Currency:"}
              fieldValue={"currency"}
              styles={styles}
              errors={errors}
              touched={touched}
            />

            <FieldModal
              name={"ISO:"}
              fieldValue={"iso3"}
              styles={styles}
              errors={errors}
              touched={touched}
            />

            <button
              type="submit"
              className={!(dirty && isValid) ? styles.disabledBtn : null}
              disabled={!(dirty && isValid)}
            >
              CHANGE
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ChangeCountryDataForm;
