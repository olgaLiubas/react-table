import { string, object } from "yup";

export const validationSchema = object().shape({
  name: string()
    .required("Name is required")
    .min(3, "Name is too short - should be 3 chars min"),
  state_code: string()
    .required("Capital is required")
    .min(3, "Capital is too short - should be 3 chars min"),
  country_id: string()
    .required("Phone code is required")
    .min(3, "Phone code is too short - should be 3 chars min"),
  latitude: string()
    .required("Currency is required")
    .min(2, "Currency is too short - should be 3 chars min"),
  longitude: string()
    .required("ISO is required")
    .min(2, "ISO is too short - should be 3 chars min"),
});
