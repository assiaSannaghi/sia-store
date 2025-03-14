import { BsSearch } from "react-icons/bs";

import { useCart } from "../contexts/CartContext";

function SearchBar() {
  const { searchTerm, setSearchTerm } = useCart();

  return (
    <li className="grow flex">
      <input
        className="border w-full border-gray-400 shadow-md rounded-lg px-4 py-2 grow outline-[#8c52ff]"
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">
        <BsSearch className="text-[#8c52ff] -ml-7" />
      </button>
    </li>
  );
}

export default SearchBar;
