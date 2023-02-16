import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { FormValuesRegister } from "../../interfaces/user/UserType";
import { DispatchType } from "../../redux/configStore";
import { userRegisterApi } from "../../redux/reducer/userReducer";
import { ValidationRegisSchema } from "./Validation/ValidationSchema";

type Props = {};
// Set value in form

const RegisterForm = (props: Props) => {
  const dispatch: DispatchType = useDispatch();
  // Setup useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValuesRegister>({
    resolver: yupResolver(ValidationRegisSchema),
  });
  // Setup onSubmit event
  const onSubmit = (values: FormValuesRegister) => {
    const { ["confirmMatKhau"]: remove, ...userData } = values; // remove in-needed data
    // dispatch
    const registerAsync = userRegisterApi(userData);
    dispatch(registerAsync);
  };
  return (
    <>
      <form className="mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            {...register("taiKhoan")}
            className="form-control"
          />
          <div className="form-feedback mt-2 fst-italic text-danger">
            {errors.taiKhoan?.message}
          </div>
        </div>
        {/* PASSWORD */}
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            {...register("matKhau")}
            className="form-control"
          />
          <div className="form-feedback mt-2 fst-italic text-danger">
            {errors.matKhau?.message}
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Confirm your password</label>
          <input
            type="password"
            {...register("confirmMatKhau")}
            className="form-control"
          />
          <div className="form-feedback mt-2 fst-italic text-danger">
            {errors.confirmMatKhau?.message}
          </div>
        </div>
        {/* FULL NAME */}
        <div className="mb-3">
          <label className="form-label">Full name</label>
          <input type="text" {...register("hoTen")} className="form-control" />
          <div className="form-feedback mt-2 fst-italic text-danger">
            {errors.hoTen?.message}
          </div>
        </div>
        {/* FULL NAME */}
        <div className="mb-3">
          <label className="form-label">Phone number</label>
          <input type="text" {...register("soDT")} className="form-control" />
          <div className="form-feedback mt-2 fst-italic text-danger">
            {errors.soDT?.message}
          </div>
        </div>
        {/* EMAIL */}
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" {...register("email")} className="form-control" />
          <div className="form-feedback mt-2 fst-italic text-danger">
            {errors.email?.message}
          </div>
        </div>
        {/* GROUP ID */}
        <div className="mb-3">
          <label className="form-label">Group</label>
          <select
            className="form-select"
            defaultValue={""}
            {...register("maNhom")}
          >
            <option value="" disabled>
              Select your group
            </option>
            <option value="GP01">GP01</option>
            <option value="GP02">GP02</option>
            <option value="GP03">GP03</option>
            <option value="GP04">GP04</option>
            <option value="GP05">GP05</option>
            <option value="GP06">GP06</option>
            <option value="GP07">GP07</option>
            <option value="GP08">GP08</option>
            <option value="GP09">GP09</option>
            <option value="GP10">GP10</option>
          </select>
          <div className="form-feedback mt-2 fst-italic text-danger">
            {errors.maNhom?.message}
          </div>
        </div>

        <button type="submit" className="btn-register">
          REGISTER
        </button>
      </form>
    </>
  );
};

export default RegisterForm;
