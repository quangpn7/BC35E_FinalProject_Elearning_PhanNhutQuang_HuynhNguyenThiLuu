import * as Yup from "yup";
import { nameRule, passwordRule, phoneRule } from "./ValidationRule";
// Set rule
const prefixInsert: string = "*Insert your ";

// Login Schema
export const validationLoginSchema = Yup.object().shape({
  taiKhoan: Yup.string().required(`${prefixInsert}username`),
  matKhau: Yup.string().required(`${prefixInsert}password`),
});

// Register Schema
export const ValidationRegisSchema = Yup.object().shape({
  taiKhoan: Yup.string().required(`${prefixInsert}username or Email`),
  matKhau: Yup.string()
    .required(`${prefixInsert}password`)
    .min(passwordRule.min, passwordRule.errorLen)
    .max(passwordRule.max, passwordRule.errorLen)
    .matches(passwordRule.regex, passwordRule.errorRegex),

  confirmMatKhau: Yup.string()
    .required(`${prefixInsert}password confirm`)
    .oneOf([Yup.ref("matKhau"), null], "*Password is not match"),
  hoTen: Yup.string()
    .required(`${prefixInsert}name`)
    .matches(RegExp(nameRule.regex), nameRule.errorRegex),
  soDT: Yup.string()
    .required(`${prefixInsert}your phone number`)
    .matches(phoneRule.regex, phoneRule.error)
    .min(phoneRule.min, phoneRule.error)
    .max(phoneRule.max, phoneRule.error),
  email: Yup.string().required(`${prefixInsert}Email`).email("*Invalid email"),
  maNhom: Yup.string().required("*Choose your group"),
});
// Register Schema-Admin Page
export const ValidationRegisSchemaAd = Yup.object().shape({
  taiKhoan: Yup.string().required(`${prefixInsert}username or Email`),
  matKhau: Yup.string()
    .required(`${prefixInsert}password`)
    .min(passwordRule.min, passwordRule.errorLen)
    .max(passwordRule.max, passwordRule.errorLen)
    .matches(passwordRule.regex, passwordRule.errorRegex),
  hoTen: Yup.string()
    .required(`${prefixInsert}name`)
    .matches(RegExp(nameRule.regex), nameRule.errorRegex),
  soDT: Yup.string()
    .required(`${prefixInsert}your phone number`)
    .matches(phoneRule.regex, phoneRule.error)
    .min(phoneRule.min, phoneRule.error)
    .max(phoneRule.max, phoneRule.error),
  email: Yup.string().required(`${prefixInsert}Email`).email("*Invalid email"),
  maNhom: Yup.string().required("*Choose your group"),
  maLoaiNguoiDung: Yup.string().required("*Choose your user type"),
});

// Edit profile Schema
export const ValidationProfileSchema = Yup.object().shape({
  taiKhoan: Yup.string().required(`${prefixInsert}username or Email`),
  matKhau: Yup.string()
    .required(`${prefixInsert}password`)
    .min(passwordRule.min, passwordRule.errorLen)
    .max(passwordRule.max, passwordRule.errorLen)
    .matches(passwordRule.regex, passwordRule.errorRegex),
  hoTen: Yup.string()
    .required(`${prefixInsert}name`)
    .matches(RegExp(nameRule.regex), nameRule.errorRegex),
  soDT: Yup.string()
    .required(`${prefixInsert}your phone number`)
    .matches(phoneRule.regex, phoneRule.error)
    .min(phoneRule.min, phoneRule.error)
    .max(phoneRule.max, phoneRule.error),
  email: Yup.string().required(`${prefixInsert}Email`).email("*Invalid email"),
  maNhom: Yup.string().required("*Choose your group"),
});

export const ValidationCourseSchema = Yup.object().shape({
  maKhoaHoc: Yup.string().required("Please insert course code"),
  biDanh: Yup.string(),
  tenKhoaHoc: Yup.string().required("Please insert course name"),
  maDanhMucKhoaHoc: Yup.string().required("Please choose course category"),
  moTa: Yup.string(),
});
