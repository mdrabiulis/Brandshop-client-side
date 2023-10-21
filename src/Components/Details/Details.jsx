import { useLoaderData } from "react-router-dom";
import Ratings from "../Ratings/Ratings";
import { useEffect } from "react";
import useAuthContext from "../Hooks/useAuthContext";
import Swal from "sweetalert2";

const Details = () => {
  const { user } = useAuthContext();
  const detailsData = useLoaderData();


  const { Name, Photo, Category, BrandName, Price, Rating, description } =
    detailsData;

  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => {
        data.acknowledged ? Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        }): ("");
        
        
      });
  }, []);

  const handleAddtoCard = (
    Name,
    Photo,
    Category,
    BrandName,
    Price,
    Rating,
    description
  ) => {

    const userinfo = {
      Name,
      Photo,
      Category,
      BrandName,
      Price,
      Rating,
      description,
      userName: user?.uid,
    };

    fetch("http://localhost:5000/addcart", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userinfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.insertedId === false) {
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Add to Card has been successfully..!',
            showConfirmButton: false,
            timer: 1500
          })
        }
        


      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={Photo} className="max-w-sm rounded-lg shadow-2xl " />
          <div>
            <h1 className="text-5xl font-bold">{Name}</h1>
            <p className="text-lg pt-6 font-roboto font-bold">
                Brand Name: <span className="text-[#FF6224]">{BrandName}</span>
              </p>
            <div className="flex gap-10 py-6 items-center">
              <p className="text-lg font-roboto font-semibold">
              Category: <span className="text-[#FF6224]">{Category}</span>
              </p>
              <div className="flex gap-7 items-center">
                <p className="text-lg font-roboto font-bold">Price: ${Price}</p>
                <p className="">
                  <Ratings Rating={Rating}></Ratings>
                  <span className="font-roboto font-bold">
                    Customer review
                  </span>{" "}
                  {Rating}
                </p>
              </div>
            </div>

            <p className="py-6">{description}</p>
            {/* <Link to={`/addcarts/${user?.uid}`}> */}
              <button
                onClick={() =>
                  handleAddtoCard(
                    Name,
                    Photo,
                    Category,
                    BrandName,
                    Price,
                    Rating,
                    description
                  )
                }
                className="w-28 h-12 rounded-md text-white font-roboto text-base hover:text-lg  bg-[#FF6224] hover:bg-[#dd873c]"
              >
                Add to Card
              </button>
            {/* </Link> */}
            {/* <Link to={`/addcarts/${user?.uid}`}>
              <button
                onClick={() =>
                  handleAddtoCard(
                    Name,
                    Photo,
                    Category,
                    BrandName,
                    Price,
                    Rating,
                    description
                  )
                }
                className="w-28 h-12 rounded-md text-white font-roboto text-base hover:text-lg  bg-[#FF6224] hover:bg-[#dd873c]"
              >
                Add to Card
              </button>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
