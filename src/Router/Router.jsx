import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../Error/ErrorPage";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/About Us/AboutUs";
import AddProduct from "../Pages/Add Product/AddProduct";
import Login from "../Pages/LogIn/Login";
import SignUp from "../Pages/Sign Up/SignUp";


const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/aboutus",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/addproduct",
        element: <AddProduct></AddProduct>,
      
      },
      {
        path: "/login",
        element: <Login></Login>
      
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      
      },

      {
       
      },
      {
       
      },
      {
        
      },
      {},
      {},
      {},
      {},
      {},
    ],
  },
]);

export default myRouter;
