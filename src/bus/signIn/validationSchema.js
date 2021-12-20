import { object, string } from "yup";

export const signIn = {
  shape: {
    email: "",
    password: "",
  },

  schema: object().shape({
    email: string()
      .required("Email is required")
      .min(8, "Email is too short - should be 8 chars min")
      .matches(/[a-zA-Z]/, "Email can contain only Latin letters."),

    password: string()
      .required("Password is required")
      .min(8, "Password is too short - should be 8 chars min")
      .matches(/[a-zA-Z]/, "Password can contain only Latin letters."),
  }),
};
