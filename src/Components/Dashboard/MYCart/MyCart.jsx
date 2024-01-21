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
        </div>
    );
};

export default MyCart;