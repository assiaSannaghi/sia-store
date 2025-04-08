import { BsTrash } from "react-icons/bs";
import { useCart } from "../../contexts/CartContext";
import QuantityControl from "../ui/QuantityControl";

function CartItem({ image, category, title, price, item, quantity }) {
  const { handleRemovefromCart } = useCart();

  return (
    <li className="flex gap-6">
      <div className="flex basis-1/4 justify-center items-center h-[190px] border rounded-lg">
        <img
          className="rounded-lg p-1 object-contain h-full block"
          src={image}
          alt="men's clothing"
        />
      </div>
      <div className="flex flex-col flex-1 justify-between">
        <div>
          <h2>{title}</h2>
          <p className="text-sm text-gray-400 font-medium">{category}</p>
        </div>
        <div className="flex items-center justify-center gap-1 ">
          <QuantityControl quantity={quantity} product={item} />
          <button
            onClick={() => handleRemovefromCart(item)}
            className="flex items-center gap-2 text-lg cursor-pointer text-gray-400 hover:text-red-400 transition-all duration-300"
          >
            <BsTrash />
            <span>Remove</span>
          </button>
          <span className="font-semibold ml-auto">${price.toFixed(2)}</span>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
