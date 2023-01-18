import * as Yup from "yup";

const prefixInsert: string = "*Insert your ";
// Login Schema
export const validationLoginSchema = Yup.object().shape({
  taiKhoan: Yup.string().required(`${prefixInsert}username or Email`),
  matKhau: Yup.string().required(`${prefixInsert}password`),
});

// Register Schema
export const ValidationRegisSchema = Yup.object().shape({
  taiKhoan: Yup.string().required(`${prefixInsert}username or Email`),
  matKhau: Yup.string().required(`${prefixInsert}password`),
  confirmMatKhau: Yup.string()
    .required(`${prefixInsert}password confirm`)
    .oneOf([Yup.ref("matKhau"), null], "*Password is not match"),
  hoTen: Yup.string().required(`${prefixInsert}name`),
  soDT: Yup.string().required(`${prefixInsert}your phone number`),
  email: Yup.string().required(`${prefixInsert}Email`).email("*Invalid email"),
  maNhom: Yup.string().required("*Choose your group"),
});
