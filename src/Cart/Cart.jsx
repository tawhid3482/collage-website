import UseCart from "../Hooks/UseCart";

const Cart = () => {
    const [cart]=UseCart()
    console.log(cart)
    return (
        <div>
          <p>  Your Course : {cart.name}</p>
        </div>
    );
};

export default Cart;