import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { DispatchType, RootState } from "../../redux/configStore";
import { addCourseApi, Category, updateCourseApi } from "../../redux/reducer/courseReducer";
import { setEditType, hideModal } from "../../redux/reducer/modalReducer";

import { ValidationCourseSchema } from "./ValidationSchema";

type Props = {};

const CourseForm = (props: Props) => {
  const { editType } = useSelector((state: RootState) => state.modalReducer);
  const { courseForm, allCategory } = useSelector(
    (state: RootState) => state.courseReducer
  );

  interface CourseFormModal {
    maKhoaHoc: string,
    biDanh: string,
    tenKhoaHoc: string,
    maDanhMucKhoaHoc: string,
    moTa: string
  }
  const { userInfo } = useSelector((state: RootState) => state.userReducer);
  console.log(courseForm);

  // setup dispatch
  const dispatch: DispatchType = useDispatch();
  // config useForm
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
  } = useForm<CourseFormModal>({
    defaultValues: {
      maKhoaHoc: courseForm.maKhoaHoc || "",
      biDanh: courseForm.biDanh || "",
      tenKhoaHoc: courseForm.tenKhoaHoc || "",
      maDanhMucKhoaHoc: courseForm.danhMucKhoaHoc || null,
      moTa: courseForm.moTa || ""
    },
    resolver: yupResolver(ValidationCourseSchema),
  });

  // reset Form
  const resetForm = () => {
    reset({
      maKhoaHoc: courseForm.maKhoaHoc || "",
      biDanh: courseForm.biDanh || "",
      tenKhoaHoc: courseForm.tenKhoaHoc || "",
      maDanhMucKhoaHoc: courseForm.danhMucKhoaHoc || null,
      moTa: courseForm.moTa || ""
    });
  };
  // setup onSubmit-discard- reset
  const onSubmit = (values: any) => {
    Modal.confirm({
      // Confirm edit
      onOk: () => {
        // ADD MODE
        if (editType) {
          // true-> add
          const newCourse = {
            ...values,
            luotXem: 0,
            danhGia: 0,
            hinhAnh: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/3/19/1025110/BTS-Jimin-1.jpg",
            maNhom: "GP01",
            ngayTao: (new Date()).toUTCString(),
            taiKhoanNguoiTao: userInfo.taiKhoan
          }

          const addCourseAction = addCourseApi(newCourse);
          dispatch(addCourseAction);
        } else {
          //other -> edit
          const { luotXem, nguoiTao: { taiKhoan }, danhGia, hinhAnh, maNhom, ngayTao } = courseForm;
          const newCourse = {
            ...values,
            luotXem,
            taiKhoanNguoiTao: taiKhoan,
            danhGia: danhGia || 0,
            hinhAnh,
            maNhom,
            ngayTao
          }
          const updateCourseAction = updateCourseApi(newCourse);
          dispatch(updateCourseAction);
        }
      },
      title: editType
        ? "New course will be added. Confirm your submit!"
        : "Changes data will be save. Confirm your changes!",
    });
  };

  const handleDiscard = () => {
    dispatch(hideModal());
    dispatch(setEditType(true));
  };
  useEffect(() => {
    resetForm();
  }, [courseForm, reset]);
  // render add - save button
  const renderBtn = (editType: boolean) => {
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
      <h4>{editType ? "ADD NEW COURSE" : "EDIT COURSE"}</h4>

      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row align-items-center">
          <div className="mb-2 col-6">
            <label className="form-label">Course Code</label>
            <input
              type="text"
              className="form-control"
              {...register("maKhoaHoc")}
              disabled={!editType}
            />
            <div className="form-feedback  fst-italic text-danger">
              {errors.maKhoaHoc?.message}
            </div>
          </div>
          <div className="mb-2 col-6">
            <label className="form-label">Course Name</label>
            <input
              type="text"
              className="form-control"
              {...register("tenKhoaHoc")}
            />
            <div className="form-feedback  fst-italic text-danger">
              {errors.tenKhoaHoc?.message}
            </div>
          </div>

          <div className="mb-2 col-6">
            <label className="form-label">Alias</label>
            <input
              type="text"
              className="form-control"
              {...register("biDanh")}
            />
            <div className="form-feedback  fst-italic text-danger">
              {errors.biDanh?.message}
            </div>
          </div>

          <div className="mb-2 col-6">
            <label className="form-label">Course Description</label>
            <input
              type="text"
              className="form-control"
              {...register("moTa")}
            />
            <div className="form-feedback  fst-italic text-danger">
              {errors.moTa?.message}
            </div>
          </div>
          <div className="mb-2 col-6">
            <label className="form-label">Course Category</label>
            <select
              className="form-select"
              defaultValue={""}
              {...register("maDanhMucKhoaHoc")}
            >
              <option value="" disabled>
                Select category
              </option>
              {allCategory?.map((category: Category) => <option value={category.maDanhMuc}>{category.tenDanhMuc}</option>)}
            </select>
            <div className="form-feedback  fst-italic text-danger">
              {errors.maDanhMucKhoaHoc?.message}
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

export default CourseForm;
