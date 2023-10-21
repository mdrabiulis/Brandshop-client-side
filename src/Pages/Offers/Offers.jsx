import { useLoaderData } from "react-router-dom";
import OfferCard from "./OfferCard";


const Offers = () => {
    const allofferdata = useLoaderData();



const offerdata = (allofferdata.slice(11))



    return (
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-[1320px] mx-6  md:mx-auto">
         {
            offerdata?.map(offer => <OfferCard key={offer._id} offer={offer}></OfferCard>)
         }
        </div>
    );
};

export default Offers;