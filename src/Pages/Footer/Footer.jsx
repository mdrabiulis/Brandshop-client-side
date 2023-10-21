import { Link, NavLink } from "react-router-dom";
import logo from "/public/404/logo2.png";
import pay1 from "/public/Images/pay/Untitled-1.png";
import pay2 from "/public/Images/pay/Untitled-2.png";
import pay3 from "/public/Images/pay/Untitled-3.png";
import useAuthContext from "../../Components/Hooks/useAuthContext";

const Footer = () => {
  const { user } = useAuthContext();

  return (
    <>
      <footer className="footer p-10 bg-base-200 text-base-content mt-8">
        <div className="">
          {/* ========== LOGO ============  */}
          <div className=" ">
            <div className="flex items-center text-3xl font-extrabold font-roboto">
              <img src={logo} alt="" className="w-32 h-24" />
              <h2 className="-ml-2">
                COMPU <span className="text-[#FF6224] ">TECH</span>
              </h2>
            </div>
          </div>
          <div className="font-roboto pl-6">
            <h2 className="text-2xl font-semibold py-1 ">
              Got Question? Call us 24/7
            </h2>
            <p className="text-xl py-1">[80] 1017 197</p>
            <p className="text-lg py-1">
              17 Princess Road, London, Greater London NW1 8JR, UK
            </p>
          </div>
        </div>

        {/* ========== paymant ============  */}
        <div className="">
          <h2 className="text-3xl font-semibold -mb-3 ml-6">Safe Payments</h2>
          <div className="flex">
            <Link>
              <img src={pay1} alt="" className="w-32 h-24" />
            </Link>
            <Link>
              <img src={pay2} alt="" className="w-32 h-24" />
            </Link>
            <Link>
              <img src={pay3} alt="" className="w-32 h-24" />
            </Link>
          </div>
        </div>
        <div className="">
          <h2 className="text-3xl font-semibold ">Quick Links</h2>
          <div className="text-xl font-semibold">
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
            {/*===== Add Product ====== */}
            <div className="">
              <NavLink
                to="/addproduct"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Add Product
              </NavLink>
            </div>

            {/*===== My Cart ====== */}

            {user && (
              <div className="">
                <NavLink
                  to={`/addcarts/${user?.uid}`}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  My Cart
                </NavLink>
              </div>
            )}
          </div>
        </div>

        {/* ========== socele ============  */}
        <nav>
          <header className="footer-title">Social</header>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
      <footer className="footer footer-center p-4 bg-base-200 text-base-content">
        <aside>
          <p>©Programming Hero 2023</p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
