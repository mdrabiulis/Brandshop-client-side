import { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import Applecard from "../Apple/Applecard";

const Hp = () => {
  const [hp, setHp] = useState([]);

  useEffect(() => {
    fetch(
      "https://server-side-g9kd9eols-md-rabiul-islams-projects-c9334bf4.vercel.app/products/Hp"
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          return setHp(data);
        } else {
          return Swal.fire({
            icon: "question",
            title: "Oops...",
            text: "Not Found Data",
            footer: "",
          });
        }
      });
  }, []);

  return (
    <div>
      <div className="grid grid-cols-3 gap-8 max-w-7xl mx-auto">
        {hp.map((phon) => (
          <Applecard key={phon._id} phon={phon}></Applecard>
        ))}
      </div>
    </div>
  );
};

export default Hp;
