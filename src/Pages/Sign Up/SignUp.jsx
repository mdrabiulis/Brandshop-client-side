import { useState } from "react";

import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Googlelogin from "../Google/Googlelogin";
import Swal from "sweetalert2";
import useAuthContext from "../../Components/Hooks/useAuthContext";

const SignUp = () => {
  const { createNewUser, userUpdateProfile } = useAuthContext();
  const [showPassword, setShowPassword] = useState(false);
  const [userErro, setUserError] = useState("");
  const [createSuccessful, setCreateSuccessful] = useState("");
  const navigate = useNavigate();

  const hendleSignUp = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const email = from.email.value;
    const photo = from.photo.value;
    const password = from.password.value;
    console.log(name, email, photo, password);

    setUserError("");
    setCreateSuccessful("");

    if (!/^(?=.*[0-9])(?=.*[A-Z])(?=.*[@$!%*#?&]).{7,12}$/.test(password)) {
      // if (!/(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{7,12}$/.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Password must contain one digit from 1 to 9 , one uppercase letter, a special character and it must be 7-12 characters long.!  Example: Aa123@#$ `,
        footer: '<a href="">Why do I have this issue?</a>',
      });
      return;
    } else {
      createNewUser(email, password)
        .then((result) => {
          console.log(result.user);
          userUpdateProfile(name, photo)
            .then(() => {
              const user = { email };
              fetch("http://localhost:5000/user", {
                method: "post",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
              })
                .then((res) => res.json())
                .then((data) => {
                  console.log(data);
                });

              // window.location.reload();
            })
            .catch(() => {});
          setCreateSuccessful("Create Account Successful");
          Swal.fire({
            icon: "success",
            title: "Create Account Successful...",
            text: "",
            footer: '<a href="">Why do I have this issue?</a>',
          });
          navigate("/");
        })
        .catch((error) => {
          setUserError(error.message);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="">Why do I have this issue?</a>',
          });
        });
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">SignUp Now</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form
            onSubmit={hendleSignUp}
            className="card-body w-[450px] bg-[#d6d5b5] rounded-md "
          >
            {/* =============== name ====================== */}
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

            {/* =============== email ====================== */}
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
            {/* =============== photo ====================== */}
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

            {/* =============== password ====================== */}
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
              />
              <span
                className="absolute top-12 right-4"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
              </span>
            </div>
            {userErro && (
              <p className="text-xl font-bold text-red-600">{userErro}</p>
            )}
            {createSuccessful && (
              <p className="text-xl font-bold text-green-700">
                {createSuccessful}
              </p>
            )}

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
