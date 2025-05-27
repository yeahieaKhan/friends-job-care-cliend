import React, { useContext } from "react";
import lotiieAnimation from "../../src/assets/loitte/lottie.json";
import Lottie from "lottie-react";
import { AuthContext } from "../contextApi/AuthContext";
import { useNavigate } from "react-router";

const Register = () => {
  const { createUser, userLogout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });

    // create user with firebase
    createUser(email, password)
      .then((restul) => {
        console.log(restul.user);
        alert(restul);
        userLogout();
        navigate("/auth/login");
      })
      .then((error) => {
        console.log(error);
      });
  };
  return (
    <div className="mx-auto bg-base-200 min-h-screen flex items-center justify-center">
      <div className="hero-content flex flex-col md:flex-row-reverse items-center gap-10">
        {/* Register Form */}
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <h2 className="text-center font-bold text-2xl pt-5">
            {" "}
            Register your accout!
          </h2>
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <label className="label">
                <span className="text-base">Email</span>
              </label>
              <input
                type="email"
                name="email"
                className="input input-bordered w-full"
                placeholder="Email"
              />

              <label className="label mt-4">
                <span className="text-base">Password</span>
              </label>
              <input
                type="password"
                name="password"
                className="input input-bordered w-full"
                placeholder="Password"
              />

              <div className="mt-2">
                <a href="#" className="link link-hover text-sm">
                  Forgot password?
                </a>
              </div>

              <button type="submit" className="btn btn-neutral mt-6 w-full">
                Register
              </button>
            </form>
          </div>
        </div>
        {/* Lottie Animation */}
        <div className="text-center lg:text-left">
          <Lottie
            animationData={lotiieAnimation}
            loop
            style={{ height: 300, width: 300 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
