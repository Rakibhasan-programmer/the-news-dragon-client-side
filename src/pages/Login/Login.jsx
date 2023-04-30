import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="container pt-4">
        <div className="row d-flex justify-content-center pt-5">
          <div className="col-md-5">
            <div className="card p-4">
              <div className="text-center">
                <h3>Welcome to Login</h3>
                <img src="" alt="" />
              </div>
              <div className="card-body">
                <span className="fs-5 d-block pb-1">Username or Email</span>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <span className="fs-5 d-block pb-1">Password</span>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Password"
                    aria-label="password"
                    aria-describedby="basic-addon2"
                  />
                </div>
                <div>
                  <button className="btn btn-dark mt-4 w-100 fw-bold fs-5">
                    Login
                  </button>
                </div>
                {/* <p className="text-center pt-2">or</p>
                <div>
                  <button className="btn btn-outline-dark w-100">
                    SignIn with google
                  </button>
                </div> */}
                <p className="text-center pt-4">
                  Haven't an account?{" "}
                  <Link
                    className="text-decoration-none d-text fw-bold"
                    to="/register"
                  >
                    Signup
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
