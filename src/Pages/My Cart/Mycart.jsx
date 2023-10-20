import { useLoaderData } from "react-router-dom";
import AddtoCart from "./AddtoCart";

const Mycart = () => {
  const addcart = useLoaderData();



  return (
    <div className="max-w-[1320px] mx-auto gap-9 grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {addcart.map((cart) => <AddtoCart cart={cart} key={cart._id}></AddtoCart>
      )}
    </div>
  );
};

export default Mycart;
