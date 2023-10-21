import { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import Applecard from "../Apple/Applecard";

const Samsung = () => {
  const [lenovo, setLenovo] = useState([]);

  useEffect(() => {
    fetch("")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  useEffect(() => {
    fetch(
      "https://server-side-g9kd9eols-md-rabiul-islams-projects-c9334bf4.vercel.app/products/Samsung"
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          return setLenovo(data);
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

  // const findCategory = apples.filter((item) => item.BrandName === "Apple");

  return (
    <div>
      <div className="grid grid-cols-3 gap-8 max-w-7xl mx-auto">
        {lenovo.map((phon) => (
          <Applecard key={phon._id} phon={phon}></Applecard>
        ))}
      </div>
    </div>
  );
};

export default Samsung;
