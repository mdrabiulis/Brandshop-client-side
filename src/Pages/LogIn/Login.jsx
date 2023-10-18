

import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useState } from "react";
// import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import Googlelogin from "../Google/Googlelogin";


const Login = () => {

    const [showPassword, setShowPassword] = useState(false);


  const hendleLogin = event => {
    event.preventDefault();
    const from = new FormData(event.currentTarget);
    const email = from.get("email");
    const Password = from.get("password");
    console.log(email, Password);
  }




  return (
    <div className="hero min-h-screen bg-base-200 font-roboto">
      <div className="hero-content flex-col ">
        <div className="text-center ">
           <h1 className="text-5xl font-bold">Login Account</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={hendleLogin} className="card-body w-[450px] bg-[#d6d5b5] rounded-md ">
          {/* <form className="card-body w-[450px] bg-[#d6d5b5] rounded-md"> */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <span
              className="absolute top-12 right-4"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
            </span>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover font-roboto">
                  Forgot password?
                </a>
              </label>
            </div>
            
            <div className="form-control mt-6">
              <button className="bg-[#FF6224] text-white font-roboto text-xl font-bold rounded-md h-10">
                Login
              </button>
            </div>
            <h2 className="">
              Do not have an account?
              <Link
                to="/signup"
                className=" text-[#3541f3] font-roboto hover:text-[#FF6224] ml-1"
              >
                Sign Up Now
              </Link>
            </h2>
            <Googlelogin></Googlelogin>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
