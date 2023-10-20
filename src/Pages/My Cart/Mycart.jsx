import { useLoaderData } from "react-router-dom";
import AddtoCart from "./AddtoCart";

const Mycart = () => {
  const addcart = useLoaderData();

  console.log(addcart);

  return (
    <div>
      {addcart.map((cart) => <AddtoCart cart={cart} key={cart._id}></AddtoCart>
      )}
    </div>
  );
};

export default Mycart;
