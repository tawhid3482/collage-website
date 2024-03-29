import { FaTrash } from "react-icons/fa";
import UseCart from "../../../Hooks/UseCart";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { Link } from "react-router-dom";

const MyCart = () => {
  const [cart,refetch] = UseCart();
  const axiosSecure = UseAxiosSecure();
  
  const handleDelete = (id) => {
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
        axiosSecure.delete(`/myCourse/${id}`).then((res)=>{
          console.log(res.data)
        })
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch()
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
        
      }
    });
  };
  const totalPrice = cart.reduce((total, item) => total + item.fee, 0);
  return (
    <div>
      <div className="flex justify-between items-center my-4">
        <p className="text-xl md:text-3xl font-bold">Total Course: {cart?.length}</p>
        <p className="text-xl md:text-3xl font-bold">Total Fee: {totalPrice}</p>
        {cart.length ? <Link to='/dashboard/payment'>
          <button  className="btn btn-sm bg-purple-500 text-white text-lg uppercase">Pay</button>
          </Link> : 
           <button disabled className="btn bg-purple-500 text-white text-lg uppercase">Pay</button>
          }
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-xl font-semibold">
              <th>No.</th>
              <th>Course</th>
              <th>Fee</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          
            {cart?.map((item, index) => (
              <tr key={item?._id}>
                <th>{index + 1}</th>
                <td className="text-lg">{item?.name}</td>
                <td className="text-lg">{item?.fee}</td>
                <td>
                  {" "}
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn"
                  >
                    <FaTrash className="text-xl text-pink-600"></FaTrash>
                  </button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
