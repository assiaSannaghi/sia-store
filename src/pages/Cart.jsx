import CartItems from "../components/cart/CartItems";
import EmptyCart from "../components/cart/EmptyCart";
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
