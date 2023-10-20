
import { Link, useLoaderData } from "react-router-dom";
import Ratings from "../Ratings/Ratings";
import { useEffect } from "react";
import useAuthContext from "../Hooks/useAuthContext";


const Details = () => {

  const { user} = useAuthContext();
  const detailsData = useLoaderData();

// console.log(user.uid);


  const {  Name, Photo, Category, BrandName, Price, Rating, description } =
    detailsData;

   

useEffect(()=>{
  fetch('http://localhost:5000/user')
  .then(res => res.json())
  .then(data => {(data);
  })
},[])




  const handleAddtoCard = (Name, Photo, Category, BrandName, Price, Rating, description) => {

    // const userinfo={ Name, Photo, Category, BrandName, Price, Rating, description,userName:user?.email }
    const userinfo={ Name, Photo, Category, BrandName, Price, Rating, description,userName:user?.uid }

console.log(userinfo);
  fetch("http://localhost:5000/addcart", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userinfo),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      
    });
  }
  
  return (
    <div>
  
      
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={Photo} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{Name}</h1>
            <div className="flex gap-10 py-6 items-center">
            <p className="text-lg font-roboto font-bold">
              Brand Name: <span className="text-[#FF6224]">{BrandName}</span>
            </p>
            <div className="flex gap-7 items-center">
              <p className="text-lg font-roboto font-bold">Price: ${Price}</p>
              <p className="border">
                <Ratings Rating={Rating}></Ratings><span className="font-roboto font-bold">Customer review</span> {Rating}
              </p>
            </div>
            </div>
            
            <p className="py-6">{description}</p>
            <Link to={`/addcarts/${user?.uid}`}><button onClick={()=>handleAddtoCard(Name, Photo, Category, BrandName, Price, Rating, description )} className="btn btn-primary">Add to Card</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Details;
