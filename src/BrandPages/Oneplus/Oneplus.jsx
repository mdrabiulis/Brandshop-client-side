import { useEffect, useState } from "react";
import Applecard from "../Apple/Applecard";
import Swal from "sweetalert2";

const Oneplus = () => {
  const [oneplus, setOneplus] = useState([]);
  // const [applephon, setApplesphon] = useState({})

  useEffect(() => {
    fetch(
      "https://server-side-g9kd9eols-md-rabiul-islams-projects-c9334bf4.vercel.app/products/Oneplus"
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          return setOneplus(data);
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
      <div className="grid grid-cols-4 gap-8">
        {oneplus.map((phon) => (
          <Applecard key={phon._id} phon={phon}></Applecard>
        ))}
      </div>
    </div>
  );
};

export default Oneplus;
