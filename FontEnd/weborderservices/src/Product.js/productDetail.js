import { useParams } from "react-router-dom";

function ProductDetail() {
    const {id}= useParams();
    return ( 
        <div>
            Chi tiết sản phẩm với id {id};
        </div>
     );
}

export default ProductDetail;