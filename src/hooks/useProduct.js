import { useEffect, useState } from "react";

export default function useProduct({ productId }) {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    function () {
      async function fetchProducts() {
        try {
          setIsLoading(true);
          const res = await fetch(
            `https://fakestoreapi.com/products/${productId}`
          );
          const data = await res.json();
          setProduct(data);
          setIsLoading(false);
        } catch (error) {
          console.log(error);
          setIsLoading(false);
        }
      }
      fetchProducts();
    },
    [productId]
  );
  return { product, isLoading };
}
