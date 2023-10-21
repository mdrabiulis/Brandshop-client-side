import { useLoaderData } from "react-router-dom";
import CollectionsCard from "./CollectionsCard";
import Swiperslider from "../../Components/Swiper/Swiperslider ";

const Collections = () => {
  const allCollections = useLoaderData();

//   console.log(allCollections);

  return ( 
    <div className="">
        <Swiperslider ></Swiperslider>
        <div className="text-center font-roboto my-14 mx-6 ">
            <h2 className="text-5xl font-bold">Our All Collections </h2>
            <p className="text-lg  my-4 md:mx-10 lg:mx-0"> Lorem, ipsum dolor sit amet consectetur adipisicing elit.Vel deleniti nobis molestiae sequi laboriosam exercitationem, <br></br>vero totam in magni doloribus iure animi perferendis ea ex provident quae? Aliquid, doloribus laudantium.</p>
        </div>
      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-[1320px] mx-6  md:mx-auto">
        {allCollections?.map((collections) => (
          <CollectionsCard
            key={collections._id}
            collections={collections}
          ></CollectionsCard>
        ))}
      </div>
    </div>
  );
};

export default Collections;
