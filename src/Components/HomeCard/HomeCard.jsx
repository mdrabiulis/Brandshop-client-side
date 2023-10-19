import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const HomeCard = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("public/data.json")
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
      });
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-3 gap-8">
      {cards.map((card) => (
        <div key={card.id}>
        <Link to={`/${card.title}`}>
        <div className="card card-compact bg-base-100 shadow-xl">
         <figure>
           <img className="w-80 h-72"
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
  );
};

export default HomeCard;
