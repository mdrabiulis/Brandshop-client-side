import { Link } from "react-router-dom";
import { BiArrowBack } from 'react-icons/bi';
import img404 from '/public/404/404.gif'



const ErrorPage = () => {
    return (
        <div>
           <div className=" flex justify-center">
           <Link to={'/'} className='flex items-center gap-2 text-[30px]'>
           <BiArrowBack className="text-[#FF6224] mt-3"></BiArrowBack>
            <button className=" mt-4 w-32 h-12 rounded-md text-white font-roboto text-base hover:text-lg  bg-[#FF6224] hover:bg-[#dd873c]">Back to home</button>
            </Link>
           </div>
           <img src={img404} alt="" className=' rounded-md mx-auto'/>
        </div>
    );
};

export default ErrorPage;