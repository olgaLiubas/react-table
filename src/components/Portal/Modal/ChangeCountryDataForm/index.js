// import { string, object } from "yup";

import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";

import { putForSaga } from "bus/country/actions";
import { getEditCountry } from "bus/country/selectors";
import FieldModal from "components/Portal/Modal/ChangeCountryDataForm/Field";
import { validationSchema } from "bus/country/validationShemaForFormik";

import styles from "./style.module.scss";

const ChangeCountryDataForm = () => {
  const editCountry = useSelector(getEditCountry);

  const dispatch = useDispatch();

  const initialValues = {
    id: editCountry.id,
    name: editCountry.name,
    capital: editCountry.capital,
    phone_code: editCountry.phone_code,
    currency: editCountry.currency,
    iso3: editCountry.iso3,
  };

  const submitForm = (values) => {
    dispatch(putForSaga(values));
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
              <p>{initialValues.id}</p>
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

// const validationSchema = {
//   shape: {
//     name: editCountry.name,
//     capital: editCountry.capital,
//     phone_code: editCountry.phone_code,
//     currency: editCountry.currency,
//     iso3: editCountry.iso3,
//   },
//   schema: object().shape({
//     name: string()
//       .required("Name is required")
//       .min(3, "Name is too short - should be 3 chars min"),
//     capital: string()
//       .required("Capital is required")
//       .min(3, "Capital is too short - should be 3 chars min"),
//     phone_code: string()
//       .required("Phone code is required")
//       .min(3, "Phone code is too short - should be 3 chars min"),
//     currency: string()
//       .required("Currency is required")
//       .min(2, "Currency is too short - should be 3 chars min"),
//     iso3: string()
//       .required("ISO is required")
//       .min(2, "ISO is too short - should be 3 chars min"),
//   }),
// };
