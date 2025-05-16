import * as Yup from "yup";

export const ReferrslValidationSchema = Yup.object().shape({
  reward_percent: Yup.number()
    .typeError("Reward percent must be a number")
    .required("Reward percent is required")
    .min(0, "Reward percent cannot be less than 0")
    .max(100, "Reward percent cannot be more than 100"),

  max_amount: Yup.number()
    .typeError("Max amount must be a number")
    .required("Max amount is required"),

  min_amount: Yup.number()
    .typeError("Min amount must be a number")
    .required("Min amount is required")
    .max(Yup.ref("max_amount"), "Min amount cannot be greater than max amount"),
});

export const InterestValidationSchema = Yup.object().shape({
  interest: Yup.number()
    .typeError("Interest must be a number")
    .required("Interest is required")
    .min(0, "Interest cannot be less than 0")
    .max(100, "Interest cannot be more than 100"),

  max_amount: Yup.number()
    .typeError("Max amount must be a number")
    .required("Max amount is required"),

  min_amount: Yup.number()
    .typeError("Min amount must be a number")
    .required("Min amount is required")
    .max(Yup.ref("max_amount"), "Min amount cannot be greater than max amount"),
});
