import { useParams } from "react-router-dom";

function Product() {
    const {id}= useParams();
    return ( 
        <div>
            This is Product
            <p>{id}</p> 
        </div>
     );
}

export default Product;