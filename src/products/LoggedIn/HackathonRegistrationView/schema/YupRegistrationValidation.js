import * as Yup from "yup"

export const YupRegistrationValidation = Yup.object().shape({
  supported_ages: Yup.string().max(255).required(),
  supported_years: Yup.string().max(255).required(),
  sex_choices: Yup.string().max(255).required(),
  participation: Yup.string().max(255).required(),
  experience: Yup.string().max(5000).required(),
  hear_us: Yup.string().max(5000).required(),
  linkedin: Yup.string().max(5000).required(),
  overview: Yup.string().max(5000).required(),
  name: Yup.string()
    .max(255)
    .required(),
  email: Yup.string()
    .max(255)
    .required(),
  number: Yup.number(),
  other_problems: Yup.string(),
  software_stack:  Yup.array().min(1, 'Please select at least one')
  .required("Files are required"),
  healthcare_problems: Yup.array()
  .min(1, "A Minimum of 1 problem is required")
  .required("Files are required")
})
