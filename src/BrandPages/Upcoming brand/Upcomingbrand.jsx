import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Upcomingbrand = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("upcoming.json")
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
      });
  }, []);
  return (
    <div>
      <h2 className="text-center text-5xl my-20 font-roboto font-bold">
        Our Upcoming brand....
      </h2>
      <div className="max-w-[1200px]  mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card) => (
          <div key={card.id}>
            <Link to="/">
              <div className="card card-compact bg-base-100 shadow-xl">
                <figure>
                  <img
                    className="w-80 h-72 rounded-md bg-white"
                    src={card.img}
                    alt={card.title}
                  />
                </figure>
                <div className="flex justify-center items-center">
                  <h2 className="card-title">{card.title}</h2>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Upcomingbrand;
