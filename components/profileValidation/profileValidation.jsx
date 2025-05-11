import * as Yup from "yup";

//Bank Validation
export const bankDetailsSchema = Yup.object({
  bank_name: Yup.string().required("Please select a bank"),
  bank_account_number: Yup.string()
    .matches(/^\d+$/, "Must be numeric")
    .required("Bank Account Numer is required"),
  bank_account_name: Yup.string()
    .matches(/^[A-Za-z\s]+$/, "Only letters and spaces allowed")
    .required(" Bank Account Name is required"),
});

//Profile Validation
export const ProfileValidationSchema = Yup.object().shape({
  name: Yup.string().required("First name is required"),
  surname: Yup.string().required("Surname is required"),
  lastname: Yup.string().required("Last name is required"),
  username: Yup.string()
    .min(4, "Username must be at least 4 characters")
    .required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone_number: Yup.string()
    .matches(/^\+?[0-9]{7,15}$/, "Invalid phone number")
    .required("Phone number is required"),
  date_of_birth: Yup.date()
    .max(new Date(), "Date of birth cannot be in the future")
    .required("Date of birth is required"),
  country: Yup.string().required("Country is required"),
  state: Yup.string().required("State is required"),
  address: Yup.string().required("Address is required"),
  city: Yup.string().required("City is required"),
  gender: Yup.string()
    .oneOf(["male", "female", "other"], "Invalid gender")
    .required("Gender is required"),
});

export const passwordSchema = Yup.object().shape({
  current_password: Yup.string().required("Current password is required"),

  password: Yup.string()
    .required("New password is required")
    .min(6, "Password must be at least 8 characters"),

  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your new password"),
});
