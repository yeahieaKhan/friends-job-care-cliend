import React, { useContext } from "react";
import lotteRegis from "../../src/assets/loitte/lottie-registration.json";
import Lottie from "lottie-react";
import { AuthContext } from "../contextApi/AuthContext";

const Login = () => {
  const { loginUser } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // login in with firebase
    loginUser(email, password)
      .then((result) => {
        console.log(result);
        alert("Login successful!");
      })
      .catch((error) => {
        console.log(error);
        alert("Login failed. Please check your email and password.");
      });
  };
  return (
    <div>
      <div className="mx-auto bg-base-200 min-h-screen flex items-center justify-center">
        <div className="hero-content flex flex-col md:flex-row-reverse items-center gap-10">
          {/* Register Form */}
          <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
            <h2 className="text-center font-bold text-2xl pt-5"> Login!</h2>
            <div className="card-body">
              <form onSubmit={handleLogin}>
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
                  Login
                </button>
              </form>
            </div>
          </div>
          {/* Lottie Animation */}
          <div className="text-center lg:text-left">
            <Lottie
              animationData={lotteRegis}
              loop
              style={{ height: 600, width: 400 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
