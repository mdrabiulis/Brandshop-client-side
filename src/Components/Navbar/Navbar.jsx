import { NavLink } from "react-router-dom";
// import logo from '/public/404/logo.png'
import logo from "../../../public/404/logo2.png";
import "./navebar.css";
import useAuthContext from "../Hooks/useAuthContext";
import LightDark from "../Light Dark Mode Toggle/LightDark";
// import Swal from "sweetalert2";

const Navbar = () => {
  const { user, SignOutUser, loading } = useAuthContext();

  if (loading) {
    return <span className="loading loading-spinner text-secondary"></span>;
  }

  const SignOutUse = () => {
    SignOutUser()
      .then((res) => {
        console.log(res.user);
        
          // Swal.fire({
          //   position: 'top-end',
          //   icon: 'success',
          //   title: 'Your work has been saved',
          //   showConfirmButton: false,
          //   timer: 1500
          // })
       
        
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    // <div  className="mx-auto grid grid-cols-3 justify-between items-center border ">
    <div className="flex flex-col md:flex-col lg:flex-row justify-between items-center  md:mx-10">
      <div className="flex items-center text-3xl font-extrabold font-roboto">
        <img src={logo} alt="" className="w-32 h-24" />
        <h2 className="">
          COMPU <span className="text-[#FF6224] ">TECH</span>
        </h2>
      </div>

   {/* ============= manus================ */}

      <div className=" flex flex-wrap mx-5 md:mx-0 gap-6 text-xl font-semibold font-roboto">
   {/*===== Home ====== */}
        <div className="">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Home
          </NavLink>
        </div>


 {/* =========== Collections========== */}
 <div className="">
          <NavLink
            to="/collections"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Collections
          </NavLink>
        </div>

{/*============== Offers ==================== */}
<div className="">
          <NavLink
            to="/offers"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Offers
          </NavLink>
        </div>

{/*============== Blogs ==================== */}
<div className="">
          <NavLink
            to="/blogs"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Blogs
          </NavLink>
        </div>


    {/*===== About Us ====== */}
        <div className="">
          <NavLink
            to="/aboutus"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            About Us
          </NavLink>
        </div>



    {/*===== Add Product ====== */}
    {user && <div className="">
          <NavLink
            to="/addproduct"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Add Product
          </NavLink>
        </div>
        }

   {/*===== My Cart ====== */}

        {user && <div className="">
         <NavLink
           to={`/addcarts/${user?.uid}`}
           className={({ isActive, isPending }) =>
             isPending ? "pending" : isActive ? "active" : ""
           }
         >
           My Cart
         </NavLink>
       </div>
        }
      </div>

 {/* =========== log in============== */}

      <div className="ml-20 my-5    md:ml-0 mb-4 md:mb-8">
        <div className="flex gap-4 items-center">
          {user && (
            <>
              {user.displayName}
              <div className="avatar ">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </div>
            </>
          )}

          <div className="flex gap-6 text-xl font-semibold font-roboto">
    {/* ====== login ======= */}
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              {user ? (
                <button onClick={SignOutUse} className="">
                  Sign Out
                </button>
              ) : (
                <button className="">Login</button>
              )}
            </NavLink>

     {/*====== signup ====== */}

            {user ? (
              ""
            ) : (
              <NavLink
                to="/signup"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Sign Up
              </NavLink>
            )}

            <LightDark></LightDark>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
