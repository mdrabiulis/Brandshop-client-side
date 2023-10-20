import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../Error/ErrorPage";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/About Us/AboutUs";
import AddProduct from "../Pages/Add Product/AddProduct";
import Login from "../Pages/LogIn/Login";
import SignUp from "../Pages/Sign Up/SignUp";
import Private from "../Pages/Private/Private";
import UpdateProduct from "../Components/Update/UpdateProduct";
import Hp from "../BrandPages/Hp/Hp";
import Oneplus from "../BrandPages/Oneplus/Oneplus";
import Samsung from "../BrandPages/Samsung/Samsung";
import Lenovo from "../BrandPages/Lenovo/Lenovo";
import Apple from "../BrandPages/Apple/Apple";
import Google from "../BrandPages/Google/Google";
import Details from "../Components/Details/Details";


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
        element: <Private><AddProduct></AddProduct></Private>
        // element: <AddProduct></AddProduct>,
      
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
        path: "/updateproduct/:id",
        element: <Private><UpdateProduct></UpdateProduct></Private>,
        loader: ({params})=> fetch(`http://localhost:5000/product/${params.id}`)
      
      },
      
      {
       path:'/Hp',
       element:<Hp></Hp>
      },
      {
       path:"/Oneplus",
       element:<Oneplus></Oneplus>
      },
      {
        path:"/Samsung",
        element:<Samsung></Samsung>
      },
      {
        path:"/Lenovo",
        element:<Lenovo></Lenovo>
      },
      {
        path:"/Apple",
        element:<Apple></Apple>
      },
      {
        path:"/Google",
        element:<Google></Google>
      },
      {
        path:"/details/:id",
        element:<Details></Details>,
        loader: ({params})=> fetch(`http://localhost:5000/product/${params.id}`)
      },
      {

      },
      {},
    ],
  },
]);

export default myRouter;
