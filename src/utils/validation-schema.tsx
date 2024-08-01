import * as Yup from "yup";

export const contact_schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  number: Yup.string().required().min(11).label("Phone Number"),
  subject: Yup.string().required().label("Phone Number"),
  massage: Yup.string().required().min(20).label("Massage"),
});

export const register_schema = Yup.object().shape({
  name: Yup.string().required().label("Username"),
  email: Yup.string().required().email().label("Email"),
  phoneNum: Yup.string().required().min(11).label("Phone Number"),
  password: Yup.string().required().min(6).label("Password"),
  confirmPass: Yup.string()
    .required()
    .oneOf(
      [Yup.ref("password"), undefined as unknown as string],
      "Passwords must match"
    )
    .label("Confirm Password"),
});

export const login_schema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

export const forgotten_schema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
});

export const commentForm = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  website: Yup.string().required().url().label("Website"),
  comment: Yup.string().required().min(20).label("Comment"),
});

export const subscribeSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
});

export const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const comment_schema = Yup.object().shape({
  title: Yup.string().required().min(6).label("Title"),
  description: Yup.string().required().min(20).label("Description"),
});
