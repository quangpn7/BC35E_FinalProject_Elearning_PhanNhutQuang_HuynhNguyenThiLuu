import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import React, { ReactNode, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addEditUserModal } from "../../interfaces/user/UserType";
import { DispatchType, RootState } from "../../redux/configStore";
import { setEditType, hideModal } from "../../redux/reducer/modalReducer";
import {
  addNewUserApi,
  editUserApi,
  setForm,
} from "../../redux/reducer/userManageReducer";
import { ValidationRegisSchemaAd } from "./Validation/ValidationSchema";

type Props = {};

const AddEditForm: React.FC<Props> = () => {
  const { editType } = useSelector((state: RootState) => state.modalReducer);
  const { userEditing } = useSelector(
    (state: RootState) => state.userManageReducer
  );

  const [passVisibility, setPassVisibility] = useState<boolean>(false);
  // setup dispatch
  const dispatch: DispatchType = useDispatch();
  // config useForm
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
  } = useForm<addEditUserModal>({
    defaultValues: {
      taiKhoan: userEditing?.taiKhoan || "",
      matKhau: "",
      hoTen: userEditing?.hoTen || "",
      soDT: userEditing?.soDT || "",
      email: userEditing?.email || "",
      maNhom: "GP01", // This is dummy, user can't change GROUP, unknown reason
      maLoaiNguoiDung: userEditing?.maLoaiNguoiDung || "",
    },
    resolver: yupResolver(ValidationRegisSchemaAd),
  });

  // reset Form
  const resetForm = () => {
    reset({
      taiKhoan: userEditing?.taiKhoan || "",
      matKhau: "",
      hoTen: userEditing?.hoTen || "",
      soDT: userEditing?.soDT || "",
      email: userEditing?.email || "",
      maLoaiNguoiDung: userEditing?.maLoaiNguoiDung || "",
    });
  };
  // setup onSubmit-discard- reset
  const onSubmit = (values: addEditUserModal): void => {
    Modal.confirm({
      // Confirm edit
      onOk: (): void => {
        // ADD MODE
        if (editType) {
          // true-> add
          const addNewUserAction = addNewUserApi(values);
          dispatch(addNewUserAction);
        } else {
          //other -> edit
          const editUserAction = editUserApi(values);
          dispatch(editUserAction);
        }
      },
      title: editType
        ? "New user will be added. Confirm your submit!"
        : "Changes data will be save. Confirm your changes!",
    });
  };

  const handleDiscard = (): void => {
    dispatch(hideModal());
    dispatch(setEditType(true));
    dispatch(setForm());
  };
  useEffect(() => {
    resetForm();
  }, [userEditing, reset]);

  // render add - save button
  const renderBtn = (editType: boolean): ReactNode => {
    //true -> edit, false -> save
    if (editType) {
      return (
        <button type="submit" className="btn btn-primary" disabled={!isDirty}>
          ADD
        </button>
      );
    }
    return (
      <button type="submit" className="btn btn-warning" disabled={!isDirty}>
        SAVE
      </button>
    );
  };

  return (
    <>
      <h2>{editType ? "ADD NEW USER" : "EDIT USER"}</h2>

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
              disabled={editType ? false : true}
            />
            <div className="form-feedback  fst-italic text-danger">
              {errors.taiKhoan?.message}
            </div>
          </div>
          {/* password */}
          <div className="mb-2 col-6">
            <div className="d-flex me-2 align-items-center">
              <label className="form-label mb-0 ">Password</label>
              <input
                type="checkbox"
                className="ms-2"
                onClick={() => {
                  setPassVisibility((prev) => !prev);
                }}
              />{" "}
            </div>
            <input
              type={passVisibility ? "text" : "password"}
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
            <label hidden={!editType} className="form-label">
              Group
            </label>
            <select
              className="form-select"
              defaultValue={""}
              {...register("maNhom")}
              hidden={!editType}
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
            <button type="button" className="btn" onClick={() => reset()}>
              <i className="fas fa-sync    "></i>
            </button>
            <button
              type="button"
              className="btn btn-secondary  mx-2"
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
