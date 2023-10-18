import { NavLink } from 'react-router-dom';
// import logo from '/public/404/logo.png'
import logo from '../../../public/404/logo2.png'
import "./navebar.css"






const Navbar = () => {
    return (
        // <div  className="mx-auto grid grid-cols-3 justify-between items-center border ">
        <div  className="flex flex-col md:flex-col lg:flex-row justify-between items-center border mx-10">
            <div className="flex items-center text-3xl font-extrabold font-roboto">
                <img src={logo} alt="" className='w-32 h-24'/>
                <h2 className=''>COMPU <span className='text-[#FF6224] '>TECH</span></h2>
            </div>

{/* ============= manus================ */}


            <div className=" flex gap-6 text-xl font-semibold font-roboto">
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
            </div>




{/* =========== log in============== */}




            <div className="flex gap-6 text-xl font-semibold font-roboto">
                 {/*===== Login ====== */}
            <div className="">              
            <NavLink 
            to="/login"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Login
          </NavLink>
            </div>

    {/*===== signup ====== */}
            <div className="">
            <NavLink 
            to="/signup"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Sign Up
          </NavLink>
            </div>
            </div>
        </div>
    );
};

export default Navbar;