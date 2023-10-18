import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../Error/ErrorPage";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/About Us/AboutUs";

const myRouter = createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
                
            },
            {
                path:'/aboutus',
                element: <AboutUs></AboutUs>
            },
           
            {
               
            },
        ]
        
    }
])

export default myRouter;