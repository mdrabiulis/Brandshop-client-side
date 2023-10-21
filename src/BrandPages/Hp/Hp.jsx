import { useState } from "react";
import { useEffect } from "react";
import Applecard from "../Apple/Applecard";
import NotPage from "../../Error/NotPage";

const Hp = () => {
  
  const [hp, setHp] = useState([]);





  useEffect(() => {
    fetch(
      "https://server-side-g9kd9eols-md-rabiul-islams-projects-c9334bf4.vercel.app/products/Hp"
    )
      .then((res) => res.json())
      .then((data) => {
        setHp(data);
      });
  }, []);

  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {hp.length > 0 ? (
          hp.map((phon) => <Applecard key={phon._id} phon={phon}></Applecard>)
        ) : (
          <NotPage></NotPage>
        )}
      </div>
    </div>
  );
};

export default Hp;
