import ServicesCar from "../Admin/ServicesCar";
import Index from "../Admin/index";
const adminRoute=[
    {
        path: '/admin/',
        element: Index
    },
    {
        path: '/admin/ServicesCar',
        element: ServicesCar
    }
]
export default adminRoute;