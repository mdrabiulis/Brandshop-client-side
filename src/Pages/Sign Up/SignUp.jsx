

import { useState } from "react";

import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import Googlelogin from "../Google/Googlelogin";








const SignUp = () => {
 
  const [showPassword, setShowPassword] = useState(false);




//   const hendleRegister = (e) => {
//     e.preventDefault();
//     const from = new FormData(e.currentTarget);
//     const name = from.get("name");
//     const email = from.get("email");
//     const photo = from.get("photo");
//     const password = from.get("password");

 

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">SignUp Now</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form
            
            className="card-body w-[450px] bg-[#d6d5b5] rounded-md "
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your photo url </span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Your photo url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                // type="password"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Your password"
                className="input input-bordered"
                required
              /><span
              className="absolute top-12 right-4"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
            </span>
              
            </div>
           
          
            <div className="form-control mt-6">
              <button className="bg-[#FF6224] text-white font-roboto text-xl font-bold rounded-md h-10">
                Sign Up Now
              </button>
            </div>
            <h2 className="">
              Already have a account
              <Link
                to="/login"
                className=" text-[#3541f3] font-roboto hover:text-[#FF6224] ml-1"
              >
                Login here
              </Link>
            </h2>
            <Googlelogin></Googlelogin>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
