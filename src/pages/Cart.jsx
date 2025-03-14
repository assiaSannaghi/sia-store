import CartItems from "../components/CartItems";
import EmptyCart from "../components/EmptyCart";
import { useCart } from "../contexts/CartContext";

function Cart() {
  const { selectedProducts } = useCart();

  return (
    <>
      <h1>Cart</h1>
      <hr />
      {selectedProducts.length ? <CartItems /> : <EmptyCart />}
    </>
  );
}

export default Cart;
