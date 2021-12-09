import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";

import {
  setEditCountryName,
  setEditCountryCapital,
  setEditCountryPhoneCode,
  setEditCountryCurrency,
  setEditCountryIso,
  putForSaga,
} from "bus/country/actions";

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

            <div className={styles.modalProp}>
              <div className={styles.modalInput}>
                <p htmlFor="name">Name:</p>
                <Field
                  type="name"
                  name="name"
                  id="name"
                  className={
                    errors.name && touched.name ? styles.inputError : null
                  }
                />
              </div>

              <ErrorMessage
                name="name"
                component="span"
                className={styles.error}
              />
            </div>

            <div className={styles.modalProp}>
              <div className={styles.modalInput}>
                <p htmlFor="capital">Capital:</p>
                <Field
                  type="capital"
                  name="capital"
                  id="capital"
                  className={
                    errors.capital && touched.capital ? styles.inputError : null
                  }
                />
              </div>

              <ErrorMessage
                name="capital"
                component="span"
                className={styles.error}
              />
            </div>

            <div className={styles.modalProp}>
              <div className={styles.modalInput}>
                <p htmlFor="phone_code">Phone code:</p>
                <Field
                  type="phone_code"
                  name="phone_code"
                  id="phone_code"
                  className={
                    errors.phone_code && touched.phone_code
                      ? styles.inputError
                      : null
                  }
                />
              </div>

              <ErrorMessage
                name="phone_code"
                component="span"
                className={styles.error}
              />
            </div>

            <div className={styles.modalProp}>
              <div className={styles.modalInput}>
                <p htmlFor="currency">Currency:</p>
                <Field
                  type="currency"
                  name="currency"
                  id="currency"
                  className={
                    errors.currency && touched.currency
                      ? styles.inputError
                      : null
                  }
                />
              </div>

              <ErrorMessage
                name="currency"
                component="span"
                className={styles.error}
              />
            </div>

            <div className={styles.modalProp}>
              <div className={styles.modalInput}>
                <p htmlFor="iso3">ISO:</p>
                <Field
                  type="iso3"
                  name="iso3"
                  id="iso3"
                  className={
                    errors.iso3 && touched.iso3 ? styles.inputError : null
                  }
                />
              </div>

              <ErrorMessage
                name="iso3"
                component="span"
                className={styles.error}
              />
            </div>

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
