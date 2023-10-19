import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import Applecard from "../Apple/Applecard";

const Lenovo = () => {
  const [lenovo, setLenovo] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products/Lenovo")
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
export default Lenovo;
