import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../Error/ErrorPage";

const myRouter = createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                
            },
            {
                
            },
           
            {
               
            },
        ]
        
    }
])

export default myRouter;