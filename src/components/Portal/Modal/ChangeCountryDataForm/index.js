import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";

import { getEditCountry } from "bus/ui/selectors";
import { validationSchema } from "bus/countries/validationShemaForFormik";
import FieldModal from "components/Portal/Modal/ChangeCountryDataForm/Field";

import styles from "./style.module.scss";

const ChangeCountryDataForm = ({ actions }) => {
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
    dispatch(actions.updateForSaga(values));
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
              actions={actions}
            />

            <FieldModal
              name={"Capital:"}
              fieldValue={"capital"}
              styles={styles}
              errors={errors}
              touched={touched}
              actions={actions}
            />

            <FieldModal
              name={"Phone code:"}
              fieldValue={"phone_code"}
              styles={styles}
              errors={errors}
              touched={touched}
              actions={actions}
            />

            <FieldModal
              name={"Currency:"}
              fieldValue={"currency"}
              styles={styles}
              errors={errors}
              touched={touched}
              actions={actions}
            />

            <FieldModal
              name={"ISO:"}
              fieldValue={"iso3"}
              styles={styles}
              errors={errors}
              touched={touched}
              actions={actions}
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
