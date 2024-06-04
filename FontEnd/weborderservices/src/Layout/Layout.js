import { Outlet } from "react-router-dom";
import './Layout.css';
function Layout() {
    return ( 
        <div>
            This is Layout
            <Outlet/>
        </div>
     );
}

export default Layout;