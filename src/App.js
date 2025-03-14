import { BrowserRouter, Route, Routes } from "react-router";
import { CartProvider } from "./contexts/CartContext";

import AppLayout from "./pages/AppLayout";
import Cart from "./pages/Cart";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
