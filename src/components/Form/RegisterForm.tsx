import React from "react";

type Props = {};

const RegisterForm = (props: Props) => {
  return (
    <>
      <form className="mx-auto">
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input type="email" className="form-control" />
        </div>
        {/* PASSWORD */}
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Confirm your password</label>
          <input type="password" className="form-control" />
        </div>
        {/* FULL NAME */}
        <div className="mb-3">
          <label className="form-label">Phone number</label>
          <input type="text" className="form-control" />
        </div>
        {/* EMAIL */}
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" />
        </div>
        {/* GROUP ID */}
        <div className="mb-3">
          <label className="form-label">Group</label>
          <select className="form-select" defaultValue={""}>
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
        </div>

        <button type="submit" className="btn-register">
          REGISTER
        </button>
      </form>
    </>
  );
};

export default RegisterForm;
