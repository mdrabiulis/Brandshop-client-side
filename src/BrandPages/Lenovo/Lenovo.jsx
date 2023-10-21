import { useEffect } from "react";
import { useState } from "react";
import Applecard from "../Apple/Applecard";
import NotPage from "../../Error/NotPage";

const Lenovo = () => {
  const [lenovo, setLenovo] = useState([]);

  useEffect(() => {
    fetch(
      "https://server-side-g9kd9eols-md-rabiul-islams-projects-c9334bf4.vercel.app/products/Lenovo"
    )
      .then((res) => res.json())
      .then((data) => {
        setLenovo(data);
      });
  }, []);

  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {
        lenovo.length > 0 ? lenovo.map((phon) => (<Applecard key={phon._id} phon={phon} ></Applecard>)):<NotPage></NotPage>
      }
      </div>
    </div>
  );
};
export default Lenovo;
