import { useEffect, useState } from "react";
import { useCart } from "../contexts/CartContext";

export default function useProducts() {
  const { searchTerm } = useCart();
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(function () {
    async function fetchProducts() {
      try {
        setStatus("loading");
        const res = await fetch("https://fakestoreapi.com/products");
        fetch("https://fakestoreapi.com/carts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify([
            {
              id: 13,
              userId: 1,
              products: [
                {
                  id: 0,
                  title: "string",
                  price: 0.1,
                  description: "string",
                  category: "string",
                  image: "http://example.com",
                },
              ],
            },
          ]),
        })
          .then((response) => response.json())
          .then((data) => data);

        const cart = { userId: 1, products: [{ id: 2, name: "nabil" }] };

        fetch("https://fakestoreapi.com/carts/13", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(cart),
        })
          .then((response) => response.json())
          .then((data) => data);

        fetch("https://fakestoreapi.com/carts/13")
          .then((response) => response.json())
          .then((data) => console.log("mt cart", data));
        const data = await res.json();
        setProducts(data);
        setStatus("success");
      } catch (error) {
        console.log(error);
        setStatus("error");
      }
    }
    fetchProducts();
  }, []);

  const filtredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return { filtredProducts, status };
}
