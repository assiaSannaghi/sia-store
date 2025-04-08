import { useCart } from "../../contexts/CartContext";

function QuantityControl({ quantity, product }) {
  const { handleIncreaseProductQuantity, handleDecreaseProductQuantity } =
    useCart();

  return (
    <div className="border rounded-md  text-lg font-bold inline-flex gap-3 items-center">
      <button
        onClick={() => handleDecreaseProductQuantity(product.id)}
        disabled={quantity === 1}
        className="text-2xl text-[#8c52ff] size-10 flex justify-center items-center leading-3 hover:bg-purple-200 transition-all duration-300 cursor-pointer disabled:cursor-not-allowed"
      >
        -
      </button>
      <span className="text-gray-400">{quantity}</span>
      <button
        onClick={() => handleIncreaseProductQuantity(product.id)}
        disabled={quantity >= 3}
        className="text-2xl text-[#8c52ff] size-10 flex justify-center items-center hover:bg-purple-200 transition-all duration-300 disabled:cursor-not-allowed"
      >
        +
      </button>
    </div>
  );
}

export default QuantityControl;
