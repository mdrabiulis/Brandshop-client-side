import { useEffect, useState } from "react";
import Applecard from "./Applecard";
import Swiperslider from "../../Components/Swiper/Swiperslider ";
import NotPage from "../../Error/NotPage";
// import useAuthContext from "../../Components/Hooks/useAuthContext";



const Apple = () => {
  // const { loading } = useAuthContext();
  const [apple, setApple] = useState([]);

  useEffect(() => {
    fetch(
      "https://server-side-g9kd9eols-md-rabiul-islams-projects-c9334bf4.vercel.app/products/Apple"
    )
      .then((res) => res.json())
      .then((data) => {
        setApple(data);
      });
  }, []);



  return (
    <div>
      <Swiperslider></Swiperslider>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {
        apple.length > 0 ? apple.map((phon) => (<Applecard key={phon._id} phon={phon} ></Applecard>)) : <NotPage></NotPage>
      }

      </div>
      
    </div>
  );
};

export default Apple;
