import PropTypes from 'prop-types';
import Ratings from "../../Components/Ratings/Ratings";


const CollectionsCard = ({collections}) => {
    const {Name, Photo, Price, Rating} =collections

    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
        <img src={Photo} alt="Shoes" className="rounded-md w-40 h-40 mx-auto" />
        <div className="card-body">
          <h2 className="card-title font-roboto font-bold">{Name}</h2>
          <div className="flex text-base font-roboto font-semibold">
            <p>Price: ${Price}</p>
            <p className="flex gap-2">
              <Ratings Rating={Rating}></Ratings>{Rating}
            </p>
          </div>
        </div>
      </div>
        </div>
    );
};


CollectionsCard.propTypes = {
    collections:PropTypes.object,
    }
export default CollectionsCard;