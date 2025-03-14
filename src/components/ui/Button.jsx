import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router";

function Button({
  variation = "primary",
  position = "self-center",
  children = "Add to cart",
  onClick,
  disabled,
}) {
  if (variation === "primary")
    return (
      <button
        className={`flex cursor-pointer gap-1 items-center ${position} px-4  py-2 font-bold uppercase bg-[#8c52ff] text-white rounded-md mt-4 hover:bg-purple-500 transition-all duration-300 disabled:bg-slate-400 disabled:cursor-not-allowed`}
        onClick={onClick}
        disabled={disabled}
      >
        {!disabled && <BsCart2 className="inline-block text-lg" />}
        {children}
      </button>
    );

  if (variation === "secondary")
    return (
      <Link
        to="/"
        className="flex cursor-pointer gap-1 items-center self-center px-4  py-2 font-bold uppercase bg-[#8c52ff] text-white rounded-md mt-4 hover:bg-purple-500 transition-all duration-300 hover:shadow-lg"
      >
        Continue shopping
      </Link>
    );
}

export default Button;
