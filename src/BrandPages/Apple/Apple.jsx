import { useEffect, useState } from "react";
import Applecard from "./Applecard";
import Swal from "sweetalert2";

import Swiperslider from "../../Components/Swiper/Swiperslider ";

const Apple = () => {
  const [apple, setApple] = useState([]);
  // const [alldata, setAlldata] = useState([]);







  useEffect(() => {
    fetch("http://localhost:5000/products/Apple")
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          return setApple(data);
        } else {
          return Swal.fire({
            icon: "question",
            title: "Oops...",
            text: "Not Found Data",
            footer: "",
          });
        }
      });
  }, []);

  // const findCategory = apple.filter((item) => item.BrandName === "Apple");
  // setAlldata(findCategory);

  return (
    <div >
      {/* <Swiperslider apple={apple}></Swiperslider> */}
      <div className="grid grid-cols-3 gap-8 max-w-7xl mx-auto">
        {apple.map((phon) => (
          <Applecard 
          key={phon._id} 
          phon={phon}></Applecard>
        ))}
      </div>
    </div>
  );
};

export default Apple;
