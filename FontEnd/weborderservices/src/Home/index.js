import { useParams } from "react-router-dom";
import request from "../utils/request";
import { useState } from "react";
import ServicesLayout from "./components/servicesLayout";
import SliderLayout from "./components/sliderLayout";
import ClientSay from "./components/clientSayLayout";
import Brand from "./components/brand";
import Banner from "./components/banner";
import ListProduct from "../Components/listProduct";

function Home() {
    const { id } = useParams();
    const [allUser,setAllUser]=useState([]);
    const getAllUser = ()=>{
        request.get("/user/alluser").then((res)=>{
            setAllUser(res.data.data);
        }).catch(()=>{
            console.log("Axios thất bại đm");
        })
    }
    return (
        <div>
            <Banner/>
            <div style={{padding: '260px 0 87px 0' }}>
                <ServicesLayout />
                <SliderLayout/>
                <ListProduct/>
                <ClientSay />
                <Brand />
            </div>
        </div>
    );
}

export default Home;