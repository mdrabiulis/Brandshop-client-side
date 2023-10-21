import { useEffect, useState } from "react";
import Applecard from "../Apple/Applecard";
import NotPage from "../../Error/NotPage";

const Oneplus = () => {
  const [oneplus, setOneplus] = useState([]);
  // const [applephon, setApplesphon] = useState({})

  useEffect(() => {
    fetch(
      "https://server-side-g9kd9eols-md-rabiul-islams-projects-c9334bf4.vercel.app/products/Oneplus"
    )
      .then((res) => res.json())
      .then((data) => {
        setOneplus(data);
      });
  }, []);

  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {
        oneplus.length > 0 ? oneplus.map((phon) => (<Applecard key={phon._id} phon={phon} ></Applecard>)):<NotPage></NotPage>
      }
      </div>
    </div>
  );
};

export default Oneplus;
