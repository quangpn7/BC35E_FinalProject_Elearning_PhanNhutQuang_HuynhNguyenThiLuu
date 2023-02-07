import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { FormValuesRegister } from "../../interfaces/user/UserType";
import { DispatchType, RootState } from "../../redux/configStore";
import { setEditType, hideModal } from "../../redux/reducer/modalReducer";
import RegisterForm from "./RegisterForm";
import { ValidationRegisSchemaAd } from "./ValidationSchema";

type Props = {};

const AddEditForm = (props: Props) => {
  const { editType } = useSelector((state: RootState) => state.modalReducer);

  // setup dispatch
  const dispatch: DispatchType = useDispatch();
  // config useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValuesRegister>({
    resolver: yupResolver(ValidationRegisSchemaAd),
  });
  // setup onSubmit-discard- reset
  const onSubmit = (values: FormValuesRegister) => {
    console.log(values);
  };

  const handleDiscard = () => {
    dispatch(hideModal());
    dispatch(setEditType(true));
    reset();
  };
  // render add - save button
  const renderBtn = (value: boolean) => {
    //true -> edit, false -> save
    if (value) {
      return (
        <button type="submit" className="btn btn-primary mx-1">
          ADD
        </button>
      );
    }
    return (
      <button type="submit" className="btn btn-warning mx-1">
        SAVE
      </button>
    );
  };

  return (
    <>
      <h4>{editType ? "ADD NEW USER" : "EDIT USER"}</h4>

      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row align-items-center">
          {/* username */}
          <div className="mb-2 col-6">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              {...register("taiKhoan")}
            />
            <div className="form-feedback  fst-italic text-danger">
              {errors.taiKhoan?.message}
            </div>
          </div>
          {/* password */}
          <div className="mb-2 col-6">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              {...register("matKhau")}
            />
            <div className="form-feedback  fst-italic text-danger">
              {errors.matKhau?.message}
            </div>
          </div>
          {/* name */}
          <div className="mb-2 col-6">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              {...register("hoTen")}
            />
            <div className="form-feedback  fst-italic text-danger">
              {errors.hoTen?.message}
            </div>
          </div>
          {/* phone */}
          <div className="mb-2 col-6">
            <label className="form-label">Phone</label>
            <input type="text" className="form-control" {...register("soDT")} />
            <div className="form-feedback  fst-italic text-danger">
              {errors.soDT?.message}
            </div>
          </div>
          {/* email */}
          <div className="mb-2 col-6">
            <label className="form-label">Email</label>
            <input
              type="text"
              className="form-control"
              {...register("email")}
            />
            <div className="form-feedback  fst-italic text-danger">
              {errors.email?.message}
            </div>
          </div>
          {/* user type */}
          <div className="mb-2 col-6">
            <label className="form-label">User type</label>
            <select
              className="form-select"
              defaultValue={""}
              {...register("maLoaiNguoiDung")}
            >
              <option value="" disabled>
                Select type
              </option>
              <option value="GV">Giáo vụ</option>
              <option value="HV">Học viên</option>
            </select>
            <div className="form-feedback  fst-italic text-danger">
              {errors.maLoaiNguoiDung?.message}
            </div>
          </div>
          {/* group */}
          <div className="mb-2 col-6">
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
            <div className="form-feedback  fst-italic text-danger">
              {errors.maNhom?.message}
            </div>
          </div>
        </div>
        <div className="text-end">
          <>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleDiscard}
            >
              Discard
            </button>
            {renderBtn(editType)}
          </>
        </div>
      </form>
    </>
  );
};

export default AddEditForm;
