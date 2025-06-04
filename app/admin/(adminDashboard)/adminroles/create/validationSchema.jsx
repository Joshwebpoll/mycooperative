import * as Yup from "yup";

export const AdminvalidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),

  first_name: Yup.string()
    .min(2, "First name must be at least 2 characters")
    .required("First name is required"),

  last_name: Yup.string()
    .min(2, "Last name must be at least 2 characters")
    .required("Last name is required"),

  username: Yup.string()
    .min(3, "Username must be at least 3 characters")
    .required("Username is required"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),

  confirm_password: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),

  phone_number: Yup.string()
    .matches(/^[0-9]{10,15}$/, "Phone number must be 10 to 15 digits")
    .required("Phone number is required"),

  role: Yup.string().required("Role is required"),

  status: Yup.string()
    .oneOf(["enable", "disable"], "Status must be active or inactive")
    .required("Status is required"),
});
