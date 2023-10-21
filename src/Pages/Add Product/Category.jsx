import Swal from "sweetalert2";

const Category = () => {
  const handelAddProduct = (event) => {
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
    // console.log(user);

    fetch("https://server-side-black.vercel.app/products", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(products),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "success",
            text: "Add your products successfully ....",
          });
        }
      });
  };
  return (
    <div className="">
      <div className="max-w-[1320px] min-h-[70vh]  mx-auto  bg-[#d6d5b5] px-8 rounded">
        <div className="text-center px-0 md:px-52">
          <h2 className="text-[45px] text-[#374151]">Add Product</h2>
        </div>
        <form onSubmit={handelAddProduct}>
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
                  placeholder="Enter products Photo url"
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
              placeholder="Enter products Short description"
              className="input input-bordered font-raleway"
              required
            />
          </div>

          <button className=" w-full bg-[#FF6224] mt-8 text-center border-2 border-black rounded h-10  text-white text-[24px]">
            Add Products
          </button>
        </form>
      </div>
    </div>
  );
};

export default Category;
