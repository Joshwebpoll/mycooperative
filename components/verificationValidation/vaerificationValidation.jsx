import * as yup from "yup";

export const bvnValidationSchema = yup.object().shape({
  bvn: yup
    .string()
    .required("BVN is required")
    .matches(/^\d{11}$/, "BVN must be exactly 11 digits"),

  bvn_phone_number: yup
    .string()
    .transform((value) => value.replace(/\D/g, "")) // Remove non-digit characters
    .required("Phone number is required")
    .matches(/^\d{11}$/, "Phone number must be exactly 11 digits"),

  date_of_birth: yup
    .date()
    .required("Date of birth is required")
    .max(new Date(), "Date of birth cannot be in the future"),

  gender: yup
    .string()
    .required("Gender is required")
    .oneOf(["male", "female", "other"], "Invalid gender"),
});
export const ninValidationSchema = yup.object().shape({
  nin: yup
    .string()
    .required("Nin is required")
    .matches(/^\d{11}$/, "Nin must be exactly 11 digits"),

  nin_phone_number: yup
    .string()
    .required("Phone number is required")
    .matches(/^\d{11}$/, "Phone number must be exactly 11 digits"),

  date_of_birth: yup
    .date()
    .required("Date of birth is required")
    .max(new Date(), "Date of birth cannot be in the future"),

  gender: yup
    .string()
    .required("Gender is required")
    .oneOf(["male", "female", "other"], "Invalid gender"),
});
