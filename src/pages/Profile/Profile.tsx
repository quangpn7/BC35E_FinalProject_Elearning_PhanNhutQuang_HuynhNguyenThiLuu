import React from "react";

type Props = {};

const Profile = (props: Props) => {
  return (
    <>
      <section className="profile">
        <h1 className="text-center">Profile</h1>
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
            <div className="profile__right col-7">
              <div className="form-group bg-white p-3 shadow rounded">
                <div className="mb-3">
                  <label className="form-label">Username:</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={"Quang"}
                    disabled
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Name:</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone:</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">User's type</label>
                  <span className="badge badge-primary bg-primary">HV</span>
                </div>
                <div className="mb-3">
                  <label className="form-label">User's group</label>
                  <span className="badge badge-primary bg-primary">GP10</span>
                </div>
                <button className="btn-update">Update</button>
              </div>
            </div>
          </div>
        </div>
        <hr className="w-75 mx-auto" />
        <div className="course__attend">
          <h1 className="text-center">Attended courses</h1>
        </div>
      </section>
    </>
  );
};

export default Profile;
