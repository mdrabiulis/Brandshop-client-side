

import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useState } from "react";
// import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Googlelogin from "../Google/Googlelogin";
import useAuthContext from "../../Components/Hooks/useAuthContext";
import Swal from "sweetalert2";


const Login = () => {
  const { LoginUser} = useAuthContext();
  const [userLoginErro, setUserLoginErro] = useState("");
  const [loginUserSuccessful, setLoginUserSuccessful] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();



  const hendleLogin = (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;



    setUserLoginErro("");
    setLoginUserSuccessful("");

    
    LoginUser(email, password)
      .then((res) => {
        console.log(res.user);
        setLoginUserSuccessful("Login Successful");
        // navigate(location?.state? location.state : "/")
        Swal.fire({
          icon: 'success',
          title: 'Login Successful...',
          text: '',
          footer: '<a href="">Why do I have this issue?</a>'
        })
        navigate(location?.state? location.state : "/")
      })
      .catch((error) => {
        console.log(error.message);
        setUserLoginErro(error.message);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href="">Why do I have this issue?</a>'
        })
      });
  };


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
            {userLoginErro && (
              <p className="text-xl font-bold text-red-600">{userLoginErro}</p>
            )}
            {loginUserSuccessful && (
              <p className="text-xl font-bold text-green-700">
                {loginUserSuccessful}
              </p>
            )}
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
