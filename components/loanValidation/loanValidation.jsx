import * as Yup from "yup";

export const loanValidationSchema = Yup.object().shape({
  amount: Yup.number()
    .typeError("Amount must be a number")
    .required("Amount is required")
    .positive("Amount must be greater than zero"),
  purpose: Yup.string()
    .required("Purpose is required")
    .min(3, "Purpose must be at least 3 characters"),
});
