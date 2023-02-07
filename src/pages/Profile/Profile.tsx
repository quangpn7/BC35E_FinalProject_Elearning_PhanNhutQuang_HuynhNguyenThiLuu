import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CourseAttend from "../../components/CourseAttend/CourseAttend";
import ProfileForm from "../../components/Form/ProfileForm";
import { ValidationProfileSchema } from "../../components/Form/ValidationSchema";
import { DispatchType, RootState } from "../../redux/configStore";
import { getUserInfoApi, userUpdateApi } from "../../redux/reducer/userReducer";
import { getStoreJson, USER_LOGIN } from "../../util/config";

type Props = {};

const Profile = (props: Props) => {
  const dispatch: DispatchType = useDispatch();
  // UseEffect
  useEffect(() => {
    const getUserInfoAsync = getUserInfoApi();
    dispatch(getUserInfoAsync);
  }, []);
  return (
    <>
      <section className="profile">
        <div className="d-flex justify-content-center align-items-center">
          <h1 className="me-2">Profile</h1>
        </div>
        <div className="profile__container container mx-auto ">
          <div className="row">
            <div className="profile__left col-5">
              <div className="profile__img text-center">
                <img src="https://i.pravatar.cc" className="w-75" />
                <div className="profile__name">
                  <h3 className="mt-2">Nhut Quang Phan</h3>
                  <h5 className="mt-2">Student</h5>
                  <button className="btn-upload">Upload</button>
                </div>
              </div>
            </div>
            <div className="col-7 profile__right">
              <ProfileForm />
            </div>
          </div>
        </div>
        <hr className="w-75 mx-auto" />
        <div className="course__attend">
          <h1 className="text-center">Attended courses</h1>
          <div className="container">
            <CourseAttend />
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
