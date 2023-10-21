import { Link } from "react-router-dom";
import { BiArrowBack } from 'react-icons/bi';
import img404 from '/public/404/404.gif'



const ErrorPage = () => {
    return (
        <div>
           <div className=" flex justify-center">
           <Link to={'/'} className='flex items-center gap-6 text-[30px]'>
           <BiArrowBack></BiArrowBack>
            <h2 className="text-[#374151] font-roboto">Back to home</h2>
            </Link>
           </div>
           <img src={img404} alt="" className=' rounded-md mx-auto'/>
        </div>
    );
};

export default ErrorPage;