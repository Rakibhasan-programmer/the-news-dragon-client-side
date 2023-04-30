import React from "react";
import { Link } from "react-router-dom";


const Register = () => {
  return (
    <>
      <form className="container">
        <div className="row d-flex justify-content-center pt-5">
          <div className="col-md-5">
            <div className="card p-4">
              <div className="text-center">
                <h3>Welcome to Signup</h3>
              </div>
              <div className="card-body">
                <span className="fs-5 d-block pb-1">Username</span>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    name="username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    required
                  />
                </div>
                <span className="fs-5 d-block pb-1">Email</span>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    aria-label="password"
                    aria-describedby="basic-addon2"
                    required
                  />
                </div>
                <span className="fs-5 d-block pb-1">Password</span>
                <div className="input-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    aria-label="password"
                    aria-describedby="basic-addon2"
                    required
                  />
                </div>
                <div>
                  <button className="btn btn-dark mt-5 w-100 fw-bold fs-5">
                    Signup
                  </button>
                </div>
                <p className="text-center pt-4">
                  Already have an account?{" "}
                  <Link
                    className="fw-bold text-decoration-none d-text"
                    to="/login"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Register;