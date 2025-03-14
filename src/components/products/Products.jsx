import { useNavigate } from "react-router";
import useProducts from "../../hooks/useProducts";
import NoProductFound from "./NoProductFound";
import Product from "./Product";
import Spinner from "../ui/Spinner";

function Products() {
  const { filtredProducts, status } = useProducts();
  const navigate = useNavigate();

  if (status === "loading") return <Spinner />;

  if (!filtredProducts.length) {
    return <NoProductFound />;
  }

  return (
    <ul className="flex flex-wrap mt-12 gap-6 px-9">
      {filtredProducts.map((product) => (
        <Product
          onClick={() => navigate(`/product/${product.id}`)}
          key={product.id}
          image={product.image}
          category={product.category}
          title={product.title}
          price={product.price}
          rating={product.rating}
          product={product}
          productId={product.id}
        />
      ))}
    </ul>
  );
}

export default Products;
