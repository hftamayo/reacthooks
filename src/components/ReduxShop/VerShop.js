import { useSelector } from 'react-redux';
import Cart from "./Cart/Cart";
import Layout from './Layout/Layout';
import Products from './Shop/Products';

function VerShop(){
    const showCart = useSelector(state => state.ui.cartIsVisible);

    return(
        <Layout>
           <Cart />
           <Products />
      </Layout>
    );
}

export default VerShop;