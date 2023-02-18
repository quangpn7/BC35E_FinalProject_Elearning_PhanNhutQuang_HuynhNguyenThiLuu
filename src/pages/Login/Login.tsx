import React from "react";
import { NavLink, useParams } from "react-router-dom";
import LoginForm from "../../components/Form/LoginForm";
import RegisterForm from "../../components/Form/RegisterForm";
import Register from "../Register/Register";

type Props = {
  formType: string;
};

const Login = (props: Props) => {
  return (
    <section className="login">
      <div className="container">
        <NavLink className={"navbar-brand"} to={"/"}>
          ACADEMICS
        </NavLink>
        <div className="row align-items-center">
          <div className="col-md-6 img-wrapper">
            <img src="/img/coding-login.png" className="w-100" />
          </div>
          <div className="col-md-6">
            <h1 className="login-title">Get's started</h1>
            {props.formType === "login" ? (
              <p className="text-secondary">
                Have not got an account?{" "}
                <NavLink className={"text-decoration-none a"} to={"/register"}>
                  Register
                </NavLink>
              </p>
            ) : (
              <p className="text-secondary">
                Already have an account?{" "}
                <NavLink className={"text-decoration-none a"} to={"/login"}>
                  Login
                </NavLink>
              </p>
            )}

            <hr />
            {props.formType === "login" ? <LoginForm /> : <RegisterForm />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
