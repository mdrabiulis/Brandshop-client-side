import { AiOutlineStar } from "react-icons/ai";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Ratings = () => {
    const star = 3.5;
    
  const ratingStar = Array.from({ length: 5 }, (v, index) => {
    let number = index + 0.5;

    return (
      <span key={index} className="text-[#FF6224] ">
        {star >= index + 1 ? (
          <FaStar className="w-5 h-5 "/>
        ) : star >= number ? (
          <FaStarHalfAlt className="w-5 h-5"/>
        ) : (
          <AiOutlineStar className="w-6 h-5" />
        )}
      </span>
    );
  });
  return (
    <div className="flex gap-2 ">
      {ratingStar}
    </div>
  );
};

export default Ratings;
