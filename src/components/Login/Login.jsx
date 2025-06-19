import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
      <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl mt-10">
        <h3 className="text-3xl font-bold text-center">Login now!</h3>
        <div className="card-body">
          <form className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </form>
          <p>
            New to this site? Please{" "}
            <Link className="text-blue-400 underline" to="/register">
              Register
            </Link>
          </p>
        </div>
      </div>
  );
};

export default Login;
