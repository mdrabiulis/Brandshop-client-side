import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const updateProductId = useLoaderData();
  const { _id, Name, Photo, Category, BrandName, Price, Rating, description } =
    updateProductId;

  const handelUpdateProduct = (event) => {
    event.preventDefault();
    const from = event.target;
    const Name = from.Name.value;
    const Photo = from.Photo.value;
    const Category = from.Category.value;
    const BrandName = from.BrandName.value;
    const Price = from.Price.value;
    const Rating = from.Rating.value;
    const description = from.description.value;
    const products = {
      Name,
      Photo,
      Category,
      BrandName,
      Price,
      Rating,
      description,
    };

    fetch(`https://server-side-black.vercel.app/product/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(products),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "success",
            text: "Update Your Products Successfully ....",
          });
        }
      });
    //   Swal.fire({
    //     // position: 'top-end',
    //     icon: "success",
    //     title: "Your Update has been saved",
    //     showConfirmButton: false,
    //     timer: 1500,
    //   });

    //   from.reset();
    // });
  };
  return (
    <div className="">
      <div className="max-w-[1320px] min-h-[70vh]  mx-auto  bg-[#d6d5b5] px-8 rounded mt-10">
        <div className="text-center px-52">
          <h2 className="text-[45px] text-[#374151]">Update Product</h2>
        </div>
        <form onSubmit={handelUpdateProduct}>
          <div className="grid grid-cols-2 gap-5 ">
            <div className="">
              {/*================  Name   =======================  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[20px] font-semibold text-[#1b1a1acc]">
                    Name
                  </span>
                </label>
                <input
                  type="text"
                  name="Name"
                  defaultValue={Name}
                  placeholder="Enter products Name"
                  className="input input-bordered font-raleway "
                  required
                />
              </div>

              {/*================   Photo  =======================  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[20px] font-semibold text-[#1b1a1acc]">
                    Photo Url
                  </span>
                </label>
                <input
                  type="url"
                  name="Photo"
                  defaultValue={Photo}
                  placeholder="Enter products Photo Url"
                  className="input input-bordered font-raleway"
                  required
                />
              </div>

              {/*================   Category  =======================  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[20px] font-semibold text-[#1b1a1acc]">
                    Category
                  </span>
                </label>
                <input
                  type="text"
                  name="Category"
                  defaultValue={Category}
                  placeholder="Enter products category"
                  className="input input-bordered font-raleway"
                  required
                />
              </div>
            </div>

            <div className="">
              {/*================   BrandName  =======================  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[20px] font-semibold text-[#1b1a1acc]">
                    Brand Name
                  </span>
                </label>
                <input
                  type="text"
                  name="BrandName"
                  defaultValue={BrandName}
                  placeholder="Enter products Brand Name"
                  className="input input-bordered font-raleway"
                  required
                />
              </div>

              {/*================   Price  =======================  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[20px] font-semibold text-[#1b1a1acc]">
                    Price
                  </span>
                </label>
                <input
                  type="text"
                  name="Price"
                  defaultValue={Price}
                  placeholder="Enter products Price"
                  className="input input-bordered font-raleway"
                  required
                />
              </div>

              {/*================   Rating  =======================  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[20px] font-semibold text-[#1b1a1acc]">
                    Rating
                  </span>
                </label>
                <input
                  type="text"
                  name="Rating"
                  defaultValue={Rating}
                  placeholder="Enter products Rating"
                  className="input input-bordered font-raleway"
                  required
                />
              </div>
            </div>
          </div>

          {/*================   description  =======================  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[20px] font-semibold text-[#1b1a1acc]">
                Short description
              </span>
            </label>
            <input
              type="text"
              name="description"
              defaultValue={description}
              placeholder="Enter products Short description"
              className="input input-bordered font-raleway"
              required
            />
          </div>

          <button className=" w-full bg-[#FF6224] mt-8 text-center border-2 border-black rounded h-10  text-white text-[24px]">
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
