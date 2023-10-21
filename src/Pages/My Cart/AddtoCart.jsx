import Swal from "sweetalert2";
import PropTypes from "prop-types";

const AddtoCart = ({ cart, allAddtoCart, setAllAddtoCart }) => {
  const { _id, Name, Photo } = cart;

  const hendelDelete = (_id) => {
    // console.log(_id, "deleat");

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // fetch(`http://localhost:5000/addcart/${_id}`, {
        fetch(
          `https://server-side-g9kd9eols-md-rabiul-islams-projects-c9334bf4.vercel.app/addcart/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              // const remaining = allAddtoCart.filter(additem =>additem._id !== _id);
              const remaining = allAddtoCart.filter((item) => item._id !== _id);
              setAllAddtoCart(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="">
      {/* <div className="card card-compact w-96 bg-base-100 shadow-xl"> */}
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img className="w-32 rounded" src={Photo} alt={Name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{Name}</h2>
          <div className="card-actions justify-end">
            <button
              onClick={() => hendelDelete(_id)}
              className=" w-20 h-10 rounded-md text-white font-roboto text-base hover:text-lg  bg-[#FF6224] hover:bg-[#dd873c]"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
AddtoCart.propTypes = {
  cart: PropTypes.object,
  allAddtoCart: PropTypes.object,
  setAllAddtoCart: PropTypes.array,
};
export default AddtoCart;
