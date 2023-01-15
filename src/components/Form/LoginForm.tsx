import React from "react";

type Props = {};

const LoginForm = (props: Props) => {
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

        <button type="submit" className="btn-login">
          LOGIN
        </button>
      </form>
    </>
  );
};

export default LoginForm;
