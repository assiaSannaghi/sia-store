import { BiErrorCircle } from "react-icons/bi";
import { useParams } from "react-router";
import Button from "../components/ui/Button";
import Details from "../components/products/Details";
import Spinner from "../components/ui/Spinner";
import useProduct from "../hooks/useProduct";

function ProductDetails() {
  const params = useParams();
  const { product, isLoading } = useProduct(params);

  if (isLoading === true) return <Spinner />;

  if (product.length < 1) {
    return (
      <div className="flex flex-col gap-2 justify-center items-center mt-20">
        <BiErrorCircle className="text-8xl" />
        <p className="text-lg font-bold">Product not found</p>
        <Button variation="secondary" />
      </div>
    );
  }

  return (
    <>
      <h1>Details</h1>
      <hr />
      <Details
        image={product.image}
        category={product.category}
        title={product.title}
        price={product.price}
        rating={product.rating}
        description={product.description}
        product={product}
      />
    </>
  );
}

export default ProductDetails;
