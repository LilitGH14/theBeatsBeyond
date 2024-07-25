import * as Yup from "yup";

// contact_schema
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
//forgot schema
export const forgotten_schema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
});
//blog schema
export const blogSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  comment: Yup.string().required().min(20).label("Comment"),
});
//team schema
export const teamContact = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  massage: Yup.string().required().min(20).label("Massage"),
});
//team schema
export const enquireForm = Yup.object().shape({
  firstName: Yup.string().required().label("First name"),
  lastName: Yup.string().required().label("Last name"),
  email: Yup.string().required().email().label("Email"),
  number: Yup.string().required().min(11).label("Phone"),
  eventType: Yup.string().required().label("Event Type"),
  eventLocation: Yup.string().required().label("Event Location"),
  writeSomething: Yup.string().required().label("Write Something"),
});
//Comment schema
export const commentForm = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  website: Yup.string().required().url().label("Website"),
  comment: Yup.string().required().min(20).label("Comment"),
});

//Comment schema
export const joinInformationForm = Yup.object().shape({
  firstName: Yup.string().required().label("First name"),
  lastName: Yup.string().required().label("Last name"),
  agencyName: Yup.string().required().label("Agency Name"),
  serviceType: Yup.string().required().label("Service Type"),
  serviceCategoryType: Yup.string().required().label("Service Category Type"),
  startingMoney: Yup.string().required().label("Starting Type"),
  teamMember: Yup.string().required().label("Team Member"),
  location: Yup.string().required().label("Location"),
  aboutAgency: Yup.string().required().label("About Agency"),
  selectedFile: Yup.mixed().required("Please attach a cover photo."),
});

//Refund schema
//Refund schema
export const refundSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  productId: Yup.string().required().label("Product Id"),
  paymentId: Yup.string().required().label("Payment Id"),
  phone: Yup.number().required().min(11).label("Phone"),
  email: Yup.string().required().email().label("Email"),
  productName: Yup.string().required().label("Product Name"),
  massage: Yup.string().required().min(20).label("Message"),
});

//subscribe schema
export const subscribeSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
});

export const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const comment_schema = Yup.object().shape({
  title: Yup.string().required().min(6).label("Title"),
  description: Yup.string().required().min(20).label("Description"),
});
