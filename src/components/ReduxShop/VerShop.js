import { useEffect } from "react";
import { useSelector } from "react-redux";
import Cart from "./Cart/Cart";
import Layout from "./Layout/Layout";
import Products from "./Shop/Products";

function VerShop() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    fetch("https://movieserp-default-rtdb.firebaseio.com/cart.json", {
      method: "PUT",
      body: JSON.stringify(cart),
    });
  }, [cart]);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default VerShop;
