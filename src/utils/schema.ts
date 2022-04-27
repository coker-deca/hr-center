import * as yup from 'yup';

export const yupPhone = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

export const regSchema = yup
  .object()
  .shape({
    fullName: yup
      .string()
      .required("Please type your name in full.")
      .min(5, "Please enter first and last name, at least 5 characters"),
    phoneNumber: yup.string().required("Please enter your phone number.").matches(yupPhone, 'Phone number is not valid'),
    email: yup
      .string()
      .email()
      .required("Please enter your email here.")
      .min(8, "Your password is too short."),
    password: yup
      .string()
      .required("Please enter your password.")
      .min(8, "Must be 8 characters or more")
      .matches(/[a-z]+/, "One lowercase character")
      .matches(/[A-Z]+/, "One uppercase character")
      .matches(/[@$!%*#?&]+/, "One special character")
      .matches(/\d+/, "One number"),
    confirmPassword: yup
      .string()
      .required("Please retype your password.")
      .oneOf([yup.ref("password"), null], "Your passwords do not match."),
  })
  .required();

export const loginSchema = yup
  .object()
  .shape({
    email: yup
      .string()
      .email()
      .required("Please enter your email here.")
      .min(8, "Your password is too short."),
    password: yup
      .string()
      .required("Please enter your password.")
      .min(8, "Must be 8 characters or more")
      .matches(/[a-z]+/, "One lowercase character")
      .matches(/[A-Z]+/, "One uppercase character")
      .matches(/[@$!%*#?&]+/, "One special character")
      .matches(/\d+/, "One number"),
  })
  .required();
