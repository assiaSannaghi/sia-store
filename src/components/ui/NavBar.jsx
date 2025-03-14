import { Link } from "react-router";
import { BsCart2 } from "react-icons/bs";

import SearchBar from "../SearchBar";
import { useCart } from "../../contexts/CartContext";

function NavBar() {
  const { selectedProducts } = useCart();
  const numProducts = selectedProducts
    .map((product) => product.quantity)
    .reduce((acc, cur) => acc + cur, 0);

  return (
    <nav className="mb-10 sticky top-0 py-2 pr-2 bg-white">
      <ul className="flex items-center gap-4">
        <li className="shrink-0">
          <Link to="/" className="inline-block">
            <img
              className="object-containobject-contain w-20"
              src="logo-store.png"
              alt="logo"
            />
          </Link>
        </li>
        <SearchBar />
        <li className="relative">
          <Link to="/cart">
            <BsCart2 className="text-xl text-[#8c52ff] hover:text-purple-500 transition-all duration-300" />
          </Link>
          <div className="absolute -top-[0.65rem] -right-[0.7rem] bg-[#8c52ff] rounded-full p-1 text-xs size-4 leading-[0.6rem] flex justify-center items-center font-semibold text-white">
            <span>{numProducts}</span>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
