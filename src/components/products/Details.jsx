import { useCart } from "../../contexts/CartContext";
import Button from "../ui/Button";
import RatingStars from "../ui/RatingStars";

function Details({
  image,
  category,
  title,
  price,
  rating,
  description,
  product,
}) {
  const { handleAddToCart, selectedProducts } = useCart();

  const currentQuantity =
    selectedProducts.length > 0 &&
    selectedProducts.find((prdt) => product.id === prdt.id)?.quantity;

  const isLimitQunantity = currentQuantity > 2;

  const handleClick = (e) => {
    e.stopPropagation();
    handleAddToCart(product);
  };
  return (
    <div className="flex gap-6 mt-16 h-full">
      <div className="flex w-full justify-center items-center border rounded-lg px-10 py-5">
        <img
          className="object-contain h-full block"
          src={image}
          alt="men's clothing"
        />
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="font-bold">{title}</h2>
          <p className="text-sm text-gray-400 font-medium">{category}</p>
        </div>

        <RatingStars rate={rating.rate} count={rating.count} size={"text-xl"} />
        <p>{description}</p>
        <span className="font-bold text-xl">${price.toFixed(2)}</span>
        <Button
          onClick={handleClick}
          disabled={isLimitQunantity}
          position="self-start"
        >
          {isLimitQunantity ? "you ratched limit" : "Add to cart"}
        </Button>
        {/* <Button position="self-start" onClick={handleClick} /> */}
      </div>
    </div>
  );
}

export default Details;
