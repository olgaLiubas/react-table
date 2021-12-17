import * as Yup from "yup";

export const initialValues = {
  email: "",
  password: "",
};

export const signInSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .min(8, "Email is too short - should be 8 chars min")
    .matches(/[a-zA-Z]/, "Email can contain only Latin letters."),

  password: Yup.string()
    .required("Password is required")
    .min(8, "Password is too short - should be 8 chars min")
    .matches(/[a-zA-Z]/, "Password can contain only Latin letters."),
});
