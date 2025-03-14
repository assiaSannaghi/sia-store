import { BsTrash } from "react-icons/bs";
import { useCart } from "../../contexts/CartContext";
import CartItem from "./CartItem";

function CartItems() {
  const { selectedProducts, handleClearCart } = useCart();

  const totalPrice = selectedProducts
    .map((product) => product.quantity * product.price)
    .reduce((acc, cur) => acc + cur, 0);
  // console.log("totalPrice", totalPrice);

  return (
    <>
      <div className="flex items-center justify-between">
        <button
          onClick={handleClearCart}
          className="flex items-center gap-1 mt-3 mb-10 underline font-bold text-red-400 cursor-pointer hover:no-underline transition-all duration-300"
        >
          <BsTrash /> Clear cart
        </button>
        <span>
          Total price:
          <span className="font-bold"> ${totalPrice.toFixed(2)}</span>
        </span>
      </div>
      <ul className=" flex flex-col gap-8">
        {selectedProducts.map((selectedProduct, i) => (
          <CartItem
            key={i + 1}
            image={selectedProduct.image}
            category={selectedProduct.category}
            title={selectedProduct.title}
            price={selectedProduct.price}
            quantity={selectedProduct.quantity}
            item={selectedProduct}
          />
        ))}
      </ul>
    </>
  );
}

export default CartItems;
