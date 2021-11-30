import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cart from "./Cart/Cart";
import Layout from "./Layout/Layout";
import Products from "./Shop/Products";
import Notification from "./UI/Notification";
import {sendCartData, fetchCartData} from "../../storeshop/cart-actions";

let isInitial = true;


function VerShop() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if(isInitial){
      isInitial = false;
      return;
    }
    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default VerShop;
