import * as Yup from "yup";
import { nameRule, passwordRule, phoneRule } from "./ValidationRule";

const prefixInsert: string = "*Insert your ";

// <-------------------LOGIN SCHEMA------------------->

export const validationLoginSchema: Yup.AnyObjectSchema = Yup.object().shape({
  taiKhoan: Yup.string().required(`${prefixInsert}username`),
  matKhau: Yup.string().required(`${prefixInsert}password`),
});

// <-------------------REGISTER SCHEMA------------------->

export const ValidationRegisSchema: Yup.AnyObjectSchema = Yup.object().shape({
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
// <-------------------REGISTER SCHEMA-ADMIN PAGE------------------->

export const ValidationRegisSchemaAd: Yup.AnyObjectSchema = Yup.object().shape({
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

// <-------------------EDIT PROFILE SCHEMA------------------->

export const ValidationProfileSchema: Yup.AnyObjectSchema = Yup.object().shape({
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
// <-------------------COURSE SCHEMA------------------->

export const ValidationCourseSchema: Yup.AnyObjectSchema = Yup.object().shape({
  maKhoaHoc: Yup.string().required("Please insert course code"),
  biDanh: Yup.string(),
  tenKhoaHoc: Yup.string().required("Please insert course name"),
  maDanhMucKhoaHoc: Yup.string().required("Please choose course category"),
  moTa: Yup.string(),
});
