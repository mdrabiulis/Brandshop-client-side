
import { AiOutlineGoogle,} from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import useAuthContext from "../../Components/Hooks/useAuthContext";
import Swal from "sweetalert2";



const Googlelogin = () => {

 

  const navigate = useNavigate();
  const location = useLocation();

const   {loginGoogleUser} = useAuthContext()


const googleLogIn =()=>{
  loginGoogleUser()
    .then(res =>{
      console.log(res.user)

      // navigate(location?.state? location.state : "/")
      Swal.fire({
        icon: 'success',
        title: 'Login Successful...',
        text: '',
        footer: '<a href="">Why do I have this issue?</a>'
      })
      navigate(location?.state? location.state : "/")
    })
    
    .catch(error =>{
      console.log(error);
    })
  }




  return (
    <div className="">
      <div className="divider">Or</div>
      <button onClick={googleLogIn}  className="btn hover:text-white hover:bg-[#FF6224] w-full">
        {/* <FcGoogle></FcGoogle> */}
        <AiOutlineGoogle className="w-8 h-8"></AiOutlineGoogle>
        Continue With Google
      </button>
    </div>
  );
};

export default Googlelogin;
