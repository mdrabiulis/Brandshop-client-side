import { useLoaderData } from "react-router-dom";
import AddtoCart from "./AddtoCart";
import { useState } from "react";

const Mycart = () => {
  const addcart = useLoaderData();
  const [allAddtoCart, setAllAddtoCart] = useState(addcart);

console.log(allAddtoCart);

  return (
    <div className="max-w-[1320px] mx-auto gap-9 grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {allAddtoCart.map((cart) => <AddtoCart 
      cart={cart} 
      key={cart._id}
      allAddtoCart={allAddtoCart}
      setAllAddtoCart={setAllAddtoCart}></AddtoCart>
      )}
    </div>
  );
};

export default Mycart;
