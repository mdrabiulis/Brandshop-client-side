const AddtoCart = ({ cart }) => {
  const { Name, Photo,} = cart;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="w-32"
            src={Photo}
            alt={Name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{Name}</h2>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddtoCart;
