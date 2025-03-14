import { BsCart2 } from "react-icons/bs";
import Button from "../ui/Button";

function EmptyCart() {
  return (
    <div className="flex flex-col gap-2 justify-center items-center mt-20">
      <BsCart2 className="text-3xl" />
      <p className="text-lg font-semibold">Your cart is empty</p>
      <Button variation="secondary" />
    </div>
  );
}

export default EmptyCart;
