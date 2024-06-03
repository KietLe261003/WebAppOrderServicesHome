import { Outlet, useParams } from "react-router-dom";

function Home() {
    const {id}=useParams();
    return ( 
        <div>
            This is HOme
            <div>{id}</div>
            <Outlet></Outlet>
        </div>
     );
}

export default Home;