import { useEffect, useState } from "react";
import Ratings from "../Ratings/Ratings";

// import { useLoaderData } from "react-router-dom";

const MarqueeCard = () => {
  const [mostPopular, setmostPopular] = useState([]);

  useEffect(() => {
    fetch("https://server-side-black.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        setmostPopular(data);
      });
  }, []);

  const offerdata = mostPopular.slice(12);

  return (
    <div className="">
      <h1 className="text-center text-5xl my-20 font-roboto font-bold">
        Up Coming Product....
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mx-10">
        {offerdata.map((most) => (
          <div key={most._id}>
            <div className="card card-compact bg-base-100 shadow-xl">
              <img
                src={most.Photo}
                alt="Shoes"
                className="rounded-md w-40 h-40 mx-auto"
              />
              <div className="card-body">
                <h2 className="card-title font-roboto font-bold">
                  {most.Name}
                </h2>
                <div className="flex gap-4 text-base font-roboto font-semibold">
                  <div className="">
                    <p className="">Price: ${most.Price}</p>
                  </div>
                  <p className="flex gap-2">
                    <Ratings Rating={most.Rating}></Ratings>
                    {most.Rating}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeCard;
