import { useState } from "react";
import { useEffect } from "react";
import Applecard from "../Apple/Applecard";
import NotPage from "../../Error/NotPage";
import Swiperslider from "../../Components/Swiper/Swiperslider ";

const Google = () => {
  const [google, setGoogle] = useState([]);

  useEffect(() => {
    fetch("https://server-side-black.vercel.app/products/Google")
      .then((res) => res.json())
      .then((data) => {
        setGoogle(data);
      });
  }, []);

  return (
    <div>
      <Swiperslider></Swiperslider>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {google?.map((phon) => (
          <Applecard key={phon._id} phon={phon}></Applecard>
        ))}
        {google.length == 0 && <NotPage></NotPage>}
      </div>
    </div>
  );
};

export default Google;

// {google.length > 0 ? (
//   google.map((phon) => (
//     <Applecard key={phon._id} phon={phon}></Applecard>
//   ))
// ) : (
//   <NotPage></NotPage>
// )}
