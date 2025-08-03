import * as yup from "yup";
export const contactFormSchema = yup.object({
  firstName: yup
    .string()
    .required("First name is required")
    .min(3, "First name must be at least 3 characters long")
    .max(20, "First name must be at most 20 characters long"),
  lastName: yup
    .string()
    .required("Last name is required")
    .min(3, "Last name must be at least 3 characters long")
    .max(20, "Last name must be at most 20 characters long"),
  email: yup
    .string()
    .required("Email is required")
    .min(5, "Email must be at least 5 characters long")
    .max(30, "Email must be at most 30 characters long")
    .email()
    .matches(
      /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/,
      "Invalid email address"
    ),
  phone: yup
    .string()
    .required("Phone is required")
    .matches(/^\d{10,15}$/, "Phone must be 10-15 numbers"),
});
