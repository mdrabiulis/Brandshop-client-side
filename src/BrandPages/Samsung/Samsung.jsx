import { useState } from "react";
import { useEffect } from "react";

import Applecard from "../Apple/Applecard";
import NotPage from "../../Error/NotPage";
import Swiperslider from "../../Components/Swiper/Swiperslider ";

const Samsung = () => {
  const [samsung, setSamsung] = useState([]);

  useEffect(() => {
    fetch("")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/products/Samsung")
      .then((res) => res.json())
      .then((data) => {
        setSamsung(data);
      });
  }, []);

  // const findCategory = apples.filter((item) => item.BrandName === "Apple");

  return (
    <div>
      <Swiperslider></Swiperslider>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {samsung.length > 0 ? (
          samsung.map((phon) => (
            <Applecard key={phon._id} phon={phon}></Applecard>
          ))
        ) : (
          <NotPage></NotPage>
        )}
      </div>
    </div>
  );
};

export default Samsung;
