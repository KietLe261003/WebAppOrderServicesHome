import { Outlet } from "react-router-dom";

function Layout() {
    return ( 
        <div>
            This is Layout
            <Outlet/>
        </div>
     );
}

export default Layout;