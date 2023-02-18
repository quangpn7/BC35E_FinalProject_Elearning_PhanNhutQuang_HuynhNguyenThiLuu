import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CourseAttend from "../../components/CourseAttend/CourseAttend";
import ProfileForm from "../../components/Form/ProfileForm";

import { DispatchType, RootState } from "../../redux/configStore";
import { getUserInfoApi } from "../../redux/reducer/userReducer";

type Props = {};

const Profile: React.FC<Props> = () => {
  const dispatch: DispatchType = useDispatch();
  const { hoTen, maLoaiNguoiDung } = useSelector(
    (state: RootState) => state.userReducer.userInfo
  );
  // UseEffect
  useEffect(() => {
    const getUserInfoAsync = getUserInfoApi();
    dispatch(getUserInfoAsync);
  }, []);

  return (
    <>
      <section className="profile">
        <div className="d-flex justify-content-center align-items-center">
          <h1 className="me-2 ">Profile</h1>
        </div>
        <div className="profile__container container mx-auto ">
          <div className="row align-items-start">
            <div className="profile__left col-lg-5 col-md-5 col-sm-12">
              <div className="profile__img text-center">
                <img src="https://i.pravatar.cc" className="w-50" />
                <div className="profile__name">
                  <h3 className="mt-2">{hoTen}</h3>

                  <h5 className="mt-2 text-secondary">
                    {maLoaiNguoiDung === "GV" ? "Ministry" : "Student"}
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-12 profile__right mt-3 mt-sm-0">
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
