import Button from "../ui/Button";
import RatingStars from "./RatingStars";
import { useCart } from "../../contexts/CartContext";
// import { useCallback } from "react";

function Product({ image, category, title, price, rating, onClick, product }) {
  const { handleAddToCart, selectedProducts } = useCart();
  const currentQuantity =
    selectedProducts.length > 0 &&
    selectedProducts.find((prdt) => product.id === prdt.id)?.quantity;

  const handleClick = (e) => {
    e.stopPropagation();
    handleAddToCart(product);
  };
  // const cachefunction = useCallback(() => {
  //   console.log("product id", product.id);
  // }, []);
  // cachefunction();

  const isLimitQunantity = currentQuantity > 2;
  return (
    <li
      onClick={onClick}
      className="md:w-[30%] sm:w-[45%] w-full px-3 py-4 rounded-lg border hover:shadow-lg transition-shadow duration-300 cursor-pointer"
    >
      <div className="flex flex-col h-full flex-wrap">
        <div className="flex w-full justify-center items-center h-[190px]">
          <img
            className="object-contain h-full block"
            src={image}
            alt={category}
          />
        </div>
        <div className="w-full flex-1 flex flex-wrap">
          <div className="flex w-full items-center justify-between my-4">
            <RatingStars rate={rating.rate} count={rating.count} />
            <p className="font-bold">${price.toFixed(2)}</p>
          </div>
          <h2 className="w-full">{title}</h2>
          <p className="text-sm w-full text-gray-400 font-medium">{category}</p>
          <div className="flex w-full justify-center">
            <Button onClick={handleClick} disabled={isLimitQunantity}>
              {isLimitQunantity ? "you ratched limit" : "Add to cart"}
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Product;
