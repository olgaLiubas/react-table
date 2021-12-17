import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";

import { getEditPlace } from "bus/ui/selectors";
import { validationSchema } from "bus/cities/validationShemaForFormik";
import FieldModal from "components/Portal/Modal/ChangeCountryDataForm/Field";

import styles from "./style.module.scss";

const ChangeCityDataForm = ({ actions, cellsNamesConfig }) => {
  const editPlace = useSelector(getEditPlace);
  const cells = cellsNamesConfig.filter((cell) => cell.id !== "id");

  const dispatch = useDispatch();

  const initialValues = {
    id: editPlace.id,
    name: editPlace.name,
    state_id: editPlace.state_id,
    state_code: editPlace.state_code,
    country_id: editPlace.country_id,
    country_code: editPlace.country_code,
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

            {cells.map((cell) => (
              <FieldModal
                key={cell.id}
                name={`${cell.nameOfHeaderColumn}:`}
                fieldValue={`${cell.fieldInArray}`}
                styles={styles}
                errors={errors}
                touched={touched}
                actions={actions}
              />
            ))}

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

export default ChangeCityDataForm;
