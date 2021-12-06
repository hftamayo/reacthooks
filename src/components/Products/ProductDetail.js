import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const params = useParams();
    
    console.log(params.productId);//nombre del parametro que MenuApps pasa


    return(
        <section>
            <h1>Product Detail</h1>
            <p>{params.productId}</p>
        </section>
    );
}

export default ProductDetail;