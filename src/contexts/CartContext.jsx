import { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

// 1. CREATE A CONTEXT
const CartContext = createContext();

function CartProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProducts, setSelectedProducts] = useLocalStorage(
    [],
    "selectedProducts"
  );

  const handleAddToCart = (product) => {
    setSelectedProducts((selected) => {
      if (selected.some((p) => p.id === product.id)) {
        return selected.map((p) => {
          if (p.id === product.id) {
            if (p.quantity < 3) {
              return { ...p, quantity: p.quantity + 1 };
            } else {
              // setIsLimit(true);
              return p;
            }
          }
          return p;
        });
      } else {
        return [...selected, { ...product, quantity: 1 }];
      }
    });
  };

  const handleRemovefromCart = (product) => {
    const newSelectedProducts = selectedProducts.filter(
      (item) => item !== product
    );
    setSelectedProducts(newSelectedProducts);
  };

  const handleClearCart = () => {
    setSelectedProducts([]);
  };

  const handleIncreaseProductQuantity = (productId) => {
    setSelectedProducts((selected) =>
      selected.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const handleDecreaseProductQuantity = (productId) => {
    setSelectedProducts((selected) =>
      selected.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        selectedProducts,
        handleAddToCart,
        handleRemovefromCart,
        handleClearCart,
        handleIncreaseProductQuantity,
        handleDecreaseProductQuantity,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  return context;
}

export { CartProvider, useCart };
