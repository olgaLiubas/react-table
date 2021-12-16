import { string, object } from "yup";

export const validationSchema = object().shape({
  name: string()
    .required("Name is required")
    .min(3, "Name is too short - should be 3 chars min"),
  capital: string()
    .required("Capital is required")
    .min(3, "Capital is too short - should be 3 chars min"),
  phone_code: string()
    .required("Phone code is required")
    .min(3, "Phone code is too short - should be 3 chars min"),
  currency: string()
    .required("Currency is required")
    .min(2, "Currency is too short - should be 3 chars min"),
  iso3: string()
    .required("ISO is required")
    .min(2, "ISO is too short - should be 3 chars min"),
});
