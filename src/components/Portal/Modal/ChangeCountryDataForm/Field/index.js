import { Field, ErrorMessage } from "formik";

const FieldModal = ({ name, fieldValue, styles, errors, touched }) => {
  return (
    <div className={styles.modalProp}>
      <div className={styles.modalInput}>
        <p htmlFor={fieldValue}>{name}</p>
        <Field
          type={fieldValue}
          name={fieldValue}
          id={fieldValue}
          className={
            errors[fieldValue] && touched[fieldValue] ? styles.inputError : null
          }
        />
      </div>

      <ErrorMessage
        name={fieldValue}
        component="span"
        className={styles.error}
      />
    </div>
  );
};

export default FieldModal;
