import Swal from "sweetalert2";

const AddtoCart = ({ cart }) => {
  const {_id, Name, Photo,} = cart;


  const hendelDelete =(_id)=>{
    console.log(_id, "deleat");

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`http://localhost:5000/addcart/${_id}`,{
          method: 'DELETE'
        })

        .then(res =>res.json())
        .then(data =>{
          console.log(data);
          if (data.deletedCount > 0) {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
          
        })

       
      }
    })

  }

  console.log(_id);
  return (
    <div className="">
      {/* <div className="card card-compact w-96 bg-base-100 shadow-xl"> */}
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img className="w-32"
            src={Photo}
            alt={Name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{Name}</h2>
          <div className="card-actions justify-end">
            <button onClick={()=> hendelDelete(_id)} className="btn btn-primary">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddtoCart;
