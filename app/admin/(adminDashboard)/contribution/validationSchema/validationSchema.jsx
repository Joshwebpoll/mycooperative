import * as Yup from "yup";

export const contributionSchema = Yup.object().shape({
  //member_id: Yup.string().required("Member ID is required"),

  account_number: Yup.string().required("Account number is required"),

  contribution_type: Yup.string().required("Contribution type is required"),

  amount_contributed: Yup.number()
    .typeError("Amount contributed must be a number")
    .positive("Amount must be positive")
    .required("Amount contributed is required"),

  status: Yup.string()
    .oneOf(["pending", "completed"], "Invalid status") // customize as needed
    .required("Status is required"),

  payment_method: Yup.string().required("Payment method is required"),

  //   contribution_date: Yup.date()
  //     .typeError("Invalid date format")
  //     .required("Contribution date is required"),

  contribution_deposit_type: Yup.string().required(
    "Contribution deposit type is required"
  ),
});
