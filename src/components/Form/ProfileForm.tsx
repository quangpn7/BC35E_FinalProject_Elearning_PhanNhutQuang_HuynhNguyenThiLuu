import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ValidationProfileSchema } from "./Validation/ValidationSchema";
import { userUpdateApi } from "../../redux/reducer/userReducer";
import { getStoreJson, USER_LOGIN } from "../../util/config";
import { yupResolver } from "@hookform/resolvers/yup";
import { DispatchType } from "../../redux/configStore";
import { useDispatch } from "react-redux";
import { FormValuesProfile } from "../../interfaces/user/UserType";
type Props = {};

const ProfileForm = (props: Props) => {
  const dispatch: DispatchType = useDispatch();
  const userInfo = getStoreJson(USER_LOGIN);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  // edit mode: true/false

  const [passVisibility, setPassVisibility] = useState<boolean>(false);
  // setup useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValuesProfile>({
    defaultValues: {
      matKhau: "",
      taiKhoan: userInfo?.taiKhoan || "Null",
      hoTen: userInfo?.hoTen || "Null",
      email: userInfo?.email || "Null",
      soDT: userInfo?.soDT || "Null",
      maNhom: userInfo?.maNhom || "",
      maLoaiNguoiDung: userInfo?.maLoaiNguoiDung,
    },
    resolver: yupResolver(ValidationProfileSchema),
  });
  const onSubmit = (values: FormValuesProfile): void => {
    const updateAction = userUpdateApi(values);
    dispatch(updateAction).then((): void => {
      setIsEdit(false);
    });
  };
  useEffect(() => {}, [isEdit]);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group bg-white p-3 shadow rounded">
          <div className="">
            <label className="form-label">Username:</label>
            <button
              type="button"
              className="btn p-0 ms-3"
              onClick={() => {
                setIsEdit(true); //one-way set
              }}
            >
              <i className="fas fa-pen"></i>
            </button>
            <input
              type="text"
              className="form-control"
              disabled={true}
              {...register("taiKhoan")}
            />
          </div>
          <div className="form-feedback fst-italic text-danger">
            {errors.taiKhoan?.message}
          </div>
          <div className="mt-3">
            <label className="form-label">Password:</label>
            <input
              type={passVisibility ? "text" : "password"}
              className="form-control"
              disabled={isEdit ? false : true}
              {...register("matKhau")}
            />
            <input
              type="checkbox"
              disabled={isEdit ? false : true}
              className="mt-1 ms-2"
              onClick={() => {
                setPassVisibility((prev) => !prev);
              }}
            />{" "}
            Show password
            <div className="form-feedback fst-italic text-danger">
              {errors.matKhau?.message}
            </div>
          </div>
          <div className="mt-3">
            <label className="form-label">Name:</label>
            <input
              type="text"
              className="form-control"
              disabled={isEdit ? false : true}
              {...register("hoTen")}
            />
            <div className="form-feedback fst-italic text-danger">
              {errors.hoTen?.message}
            </div>
          </div>
          <div className="mt-3">
            <label className="form-label">Email</label>
            <input
              type="text"
              className="form-control"
              disabled={isEdit ? false : true}
              {...register("email")}
            />

            <div className="form-feedback fst-italic text-danger">
              {errors.email?.message}
            </div>
          </div>
          <div className="mt-3">
            <label className="form-label">Phone:</label>
            <input
              type="text"
              className="form-control"
              disabled={isEdit ? false : true}
              {...register("soDT")}
            />
            <div className="form-feedback fst-italic text-danger">
              {errors.soDT?.message}
            </div>
          </div>
          <div className="mt-3">
            <label className="form-label">User's type: </label>
            <span className="badge badge-primary bg-primary">
              {userInfo?.maLoaiNguoiDung || ""}
            </span>
          </div>
          <div className="mt-3">
            <label className="form-label">User's group: </label>
            <select
              className="ms-3 "
              {...register("maNhom")}
              disabled={isEdit ? false : true}
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

            {/* <span className="badge badge-primary bg-primary">
                    {userInfo?.maNhom || ""}
                  </span> */}
          </div>
          {isEdit ? (
            <button className="btn-update" type="submit">
              Update
            </button>
          ) : (
            <></>
          )}
          {/* <button className="btn-update">Update</button> */}
        </div>
      </form>
    </>
  );
};

export default ProfileForm;
