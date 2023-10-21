import { Link } from "react-router-dom";
import Ratings from "../../Components/Ratings/Ratings";
import PropTypes from 'prop-types';

const Applecard = ({ phon }) => {





  const {_id, Name, Photo, Price, Rating, description } = phon;

  return (
   <div className="">
    <div className="card card-compact bg-base-100 shadow-xl">
  <img src={Photo} alt="Shoes" className="border w-72 mx-auto"/>
  <div className="card-body">
    <h2 className="card-title">{Name}</h2>
    <div className="flex">
    <p>Price: ${Price}</p>
    <p><Ratings Rating={Rating}></Ratings>{Rating}</p>
    </div>
    <p>{description}</p>
    <div className="card-actions justify-between">
      <Link to={`/updateproduct/${_id}`}><button className="w-28 h-12 rounded-md text-white font-roboto text-base hover:text-lg  bg-[#FF6224] hover:bg-[#dd873c]">Update</button></Link>
      <Link to={`/details/${_id}`}><button className="w-28 h-12 rounded-md text-white font-roboto text-base hover:text-lg  bg-[#FF6224] hover:bg-[#dd873c]">Details</button></Link>
    </div>
  </div>
</div>
   </div>
  );
};


Applecard.propTypes = {
  phon:PropTypes.object,
  }

export default Applecard;
