import React from "react";
import { Resolver, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationLoginSchema } from "./ValidationSchema";
import { userLoginApi } from "../../redux/reducer/userReducer";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../redux/configStore";

type Props = {};
//Set value in form
export type FormValues = {
  taiKhoan: string;
  matKhau: string;
};

const LoginForm = (props: Props) => {
  // Setup useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(validationLoginSchema),
  });
  // Setup onSubmit event
  const dispatch: DispatchType = useDispatch();
  const onSubmit = (values: FormValues) => {
    const loginAsync = userLoginApi(values);
    dispatch(loginAsync);
  };
  // Setup login action

  // Main FC return
  return (
    <>
      <form className="mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Username/Email</label>
          <input
            {...register("taiKhoan")}
            type="text"
            placeholder="Enter your username or Email"
            className={`form-control ${
              errors.taiKhoan ? "border border-danger" : ""
            }`}
          />
          <div className="form-feedback mt-2 fst-italic text-danger">
            {errors.taiKhoan?.message}
          </div>
        </div>
        {/* PASSWORD */}
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            {...register("matKhau")}
            type="password"
            placeholder="Enter your password"
            className={`form-control ${
              errors.matKhau ? "border border-danger" : ""
            }`}
          />
          <div className="form-feedback mt-2 fst-italic text-danger">
            {errors.matKhau?.message}
          </div>
        </div>

        <button type="submit" className="btn-login">
          LOGIN
        </button>
      </form>
    </>
  );
};

export default LoginForm;
