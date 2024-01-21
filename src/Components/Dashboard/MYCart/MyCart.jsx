import { FaTrash } from "react-icons/fa";
import UseCart from "../../../Hooks/UseCart";
import Button from "../../Shayed/Button";

const MyCart = () => {
  const [cart]=UseCart()
  // console.log(cart)
  const totalPrice = cart.reduce((total, item) => total + item.fee, 0)
  return (
        <div>
         <div className="flex justify-between items-center my-4">
          <p className="text-4xl font-bold">Total Course: {cart?.length}</p>
          <p className="text-4xl font-bold">Total Fee: {totalPrice}</p>
          <Button text={'Pay'}></Button>
         </div>

         <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="text-xl font-semibold">
        <th >No.</th>
        <th>Course</th>
        <th>Fee</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        cart?.map((item)=><tr key={item?._id}>
        <th></th>
        <td className="text-lg">{item?.name}</td>
        <td className="text-lg">{item?.fee}</td>
        <td> <button className="btn"><FaTrash className="text-xl text-pink-600"></FaTrash></button> </td>
      </tr>)
      }
      
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyCart;