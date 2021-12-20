import { useDispatch } from "react-redux";
import { setIsUserLogined } from "bus/ui/actions";
import { signIn } from "bus/signIn/validationSchema";
import { Formik, Form, Field, ErrorMessage } from "formik";

import styles from "./style.module.scss";

const LoginPage = () => {
  const dispatch = useDispatch();

  const submitForm = (values) => {
    dispatch(setIsUserLogined(values));
  };

  return (
    <Formik
      initialValues={signIn.shape}
      validationSchema={signIn.schema}
      onSubmit={submitForm}
    >
      {(formik) => {
        const { errors, touched, isValid, dirty } = formik;
        return (
          <Form className={styles.login}>
            <div className={styles.headerLogin}>
              <p>Log in</p>
            </div>

            <div className={styles.loginProp}>
              <p htmlFor="email">Email:</p>
              <Field
                type="email"
                name="email"
                id="email"
                className={
                  errors.email && touched.email ? styles.inputError : null
                }
              />
              <ErrorMessage
                name="email"
                component="span"
                className={styles.error}
              />
            </div>

            <div className={styles.loginProp}>
              <p htmlFor="password">Password:</p>
              <Field
                type="password"
                name="password"
                id="password"
                className={
                  errors.password && touched.password ? styles.inputError : null
                }
              />

              <ErrorMessage
                name="password"
                component="span"
                className={styles.error}
              />
            </div>

            <button
              type="submit"
              className={!(dirty && isValid) ? styles.disabledBtn : null}
              disabled={!(dirty && isValid)}
            >
              CONTINUE
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginPage;
