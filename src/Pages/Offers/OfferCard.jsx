import Ratings from "../../Components/Ratings/Ratings";
import PropTypes from 'prop-types';

const OfferCard = ({offer}) => {
    const {Name, Photo, Price, Rating} =offer
    return (
        <div>
        <div className="card card-compact bg-base-100 shadow-xl">
    <img src={Photo} alt="Shoes" className="rounded-md w-40 h-40 mx-auto" />
    <div className="card-body">
      <h2 className="card-title font-roboto font-bold">{Name}</h2>
      <div className="flex gap-4 text-base font-roboto font-semibold">
        <div className="">
        <p className="line-through text-red-600 ">Price: ${Price}</p>
        <p className="">Price:$600</p>
        </div>
        <p className="flex gap-2">
          <Ratings Rating={Rating}></Ratings>{Rating}
        </p>
      </div>
    </div>
  </div>
    </div>
    );
};

OfferCard.propTypes = {
    offer:PropTypes.object,
    }
export default OfferCard;