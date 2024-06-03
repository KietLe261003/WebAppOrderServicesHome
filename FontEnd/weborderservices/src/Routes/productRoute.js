import Product from "../Product.js";
import ProductDetail from "../Product.js/productDetail.js";
const productRoute = [
    {
        path: '/product',
        element: Product
    },
    {
        path: '/product/:id',
        element: Product
    },
    {
        path: '/product/Detail/:id',
        element: ProductDetail
    }
]
export default productRoute;