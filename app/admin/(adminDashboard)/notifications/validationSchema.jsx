import * as Yup from "yup";

export const notificationSchema = Yup.object().shape({
  user_id: Yup.string()
    .nullable()
    // .matches(/^\d+$/, "User ID must be a number") // or remove if you want to accept any string
    .notRequired(),

  title: Yup.string()
    .required("Title is required")
    .max(255, "Title cannot be longer than 255 characters"),

  message: Yup.string()
    .required("Message is required")
    .max(1000, "Message cannot be longer than 1000 characters"),

  type: Yup.string().required("Type is required"),
  // .oneOf(
  //   ["info", "warning", "alert", "success"],
  //   "Invalid notification type"
  // ),
});
