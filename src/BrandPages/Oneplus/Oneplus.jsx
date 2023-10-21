import { useEffect, useState } from "react";
import Applecard from "../Apple/Applecard";
import NotPage from "../../Error/NotPage";
import Swiperslider from "../../Components/Swiper/Swiperslider ";

const Oneplus = () => {
  const [oneplus, setOneplus] = useState([]);
  // const [applephon, setApplesphon] = useState({})

  useEffect(() => {
    fetch("http://localhost:5000/products/Oneplus")
      .then((res) => res.json())
      .then((data) => {
        setOneplus(data);
      });
  }, []);

  return (
    <div>
      <Swiperslider></Swiperslider>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {oneplus.length > 0 ? (
          oneplus.map((phon) => (
            <Applecard key={phon._id} phon={phon}></Applecard>
          ))
        ) : (
          <NotPage></NotPage>
        )}
      </div>
    </div>
  );
};

export default Oneplus;
